function deleteDocumentAncestorsMetadata() {

    whatApp = String(app.name);//String version of the app name

    if(whatApp.search("Photoshop") > 0) { //Check for photoshop specifically, or this will cause errors

//Function Scrubs Document Ancestors from Files

        if(!documents.length) {

            alert("There are no open documents. Please open a file to run this script.")

            return;

        }

        if (ExternalObject.AdobeXMPScript == undefined) ExternalObject.AdobeXMPScript = new ExternalObject("lib:AdobeXMPScript");

        var xmp = new XMPMeta( activeDocument.xmpMetadata.rawData);
        // Begone foul Document Ancestors!  
        xmp.deleteProperty(XMPConst.NS_PHOTOSHOP, "DocumentAncestors");
        app.activeDocument.xmpMetadata.rawData = xmp.serialize();

        function clearDocumentAncestorsForAllLayers(doc) {

            try {

                if (doc == undefined) {
                    return;
                }

                for (var i = 0; i < doc.layers.length; i++) {
                    var curLayer = doc.layers[i];
                    if (curLayer.typename === "ArtLayer") {

                        if (curLayer.kind == "LayerKind.SMARTOBJECT") {

                            app.activeDocument.activeLayer = curLayer;
                            var idplacedLayerEditContents = stringIDToTypeID("placedLayerEditContents");
                            var desc10 = new ActionDescriptor();
                            executeAction(idplacedLayerEditContents, desc10, DialogModes.NO);
                            //
                            var xmp = new XMPMeta(activeDocument.xmpMetadata.rawData);
                            // Begone foul Document Ancestors!  
                            xmp.deleteProperty(XMPConst.NS_PHOTOSHOP, "DocumentAncestors");
                            app.activeDocument.xmpMetadata.rawData = xmp.serialize();

                            app.activeDocument.close(SaveOptions.SAVECHANGES);
                        }
                    } else {
                        clearDocumentAncestorsForAllLayers(curLayer);
                    }
                }
            }catch (e){}
        }
        clearDocumentAncestorsForAllLayers(app.activeDocument);
    }
}

//Now run the function to remove the document ancestors
deleteDocumentAncestorsMetadata();
