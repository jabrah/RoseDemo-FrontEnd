import React from 'react'
import isEqual from 'lodash/isEqual'
import { getVisibleCanvases } from 'mirador/dist/es/src/state/selectors/canvases'
import { receiveAnnotation } from 'mirador/dist/es/src/state/actions/annotation'

// This component represents the entire custom Mirador plugin
class WebAnnotationsPlugin extends React.Component {
  constructor(props) {
    super(props);
    this.fetchAnnotations = this.fetchAnnotations.bind(this);
  }

  // This function loops through all the canvases and contructs and calls a new URL
  // that points to our Web Annotation endpoint. If there are no 
  // annotations for a given canvas, we display a message stating so.
  fetchAnnotations(canvases) {
    const { receiveAnnotation } = this.props;
    if (!canvases) {
      return
    }
    canvases.forEach(canvas => {
      if (canvas) {
        var iiifUrl = canvas.id;
        var url;
        // Check if the endpoint for the current canvas is a iiif or iiif3 endpoint
        if (iiifUrl.includes('iiif3')) {
          try {
            url = new URL(canvas.id.replace('iiif3', 'wa'));
          } catch (e) {
            console.log(e);
          }
        } else {
          try {
            url = new URL(canvas.id.replace('iiif', 'wa'));
          } catch (e) {
            console.log(e);
          }
        }
        // Get Web Annotations with reconstructed URL
        fetch(url, {
          method: 'GET',
        }).then(res => res.json())
          .then((results) => {
            // Create Annotation Page object
            const AnnoPage = {
              id: url,
              type: 'AnnotationPage',
              items: [
                results,
              ],
            }
            // Provide Annotation Page to Mirador
            receiveAnnotation(canvas.id, url, AnnoPage)
        }, (error) => {
          console.log(error);
        });
      }
    });
  }

  // Called when plugin is loaded. Get canvases from Mirador props and call fetchAnnotations.
  componentDidMount() {
    const { canvases } = this.props;
    this.fetchAnnotations(canvases);
  }

  // Called on plugin reload. Get correct canvas from Mirador on canvas navigation
  componentDidUpdate(prevProps) {
    const { canvases } = this.props;
    const currentCanvasIds = canvases.map(canvas => canvas.id);
    const prevCanvasIds = prevProps.canvases.map(canvas => canvas.id);
    if (!isEqual(currentCanvasIds, prevCanvasIds)) {
      console.log('fetching');
      this.fetchAnnotations(canvases);
    }
  }

  // Render the target component
  render() {
    return (
      <this.props.TargetComponent {...this.props.targetProps}></this.props.TargetComponent>
    )
  }
} 

// Hook into Mirador's state to get the canvases
function mapStateToProps(state, props) {
  return {
    canvases: getVisibleCanvases(state, { windowId: props.targetProps.windowId }),
    config: state.config,
  };
};

// Get access to the function that Mirador provides for putting annotations into Mirador's state
const mapDispatchToProps = {
  receiveAnnotation: receiveAnnotation
}

export default {
  name: "WebAnnotationsPlugin",
  target: "WindowCanvasNavigationControls",
  mode: "wrap",
  component: WebAnnotationsPlugin,
  mapStateToProps: mapStateToProps,
  mapDispatchToProps: mapDispatchToProps,
};
