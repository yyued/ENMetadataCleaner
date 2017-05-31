function deleteDocumentAncestorsMetadata() {

    if(String(app.name).search("Photoshop") > 0) {

        if(!documents.length) {

            alert("There are no open documents. Please open a file to run this script.")
            return;
        }

        if (ExternalObject.AdobeXMPScript == undefined) ExternalObject.AdobeXMPScript = new ExternalObject("lib:AdobeXMPScript");

        var xmp = new XMPMeta( activeDocument.xmpMetadata.rawData);
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

                            if (curLayer.name.indexOf('\u200B\u200B\u200B') > 0) {
                                continue;
                            }

                            curLayer.name = curLayer.name + '\u200B\u200B\u200B';

                            app.activeDocument.activeLayer = curLayer;
                            var idplacedLayerEditContents = stringIDToTypeID("placedLayerEditContents");
                            var desc10 = new ActionDescriptor();
                            executeAction(idplacedLayerEditContents, desc10, DialogModes.NO);
                            //
                            var xmp = new XMPMeta(activeDocument.xmpMetadata.rawData);
                            xmp.deleteProperty(XMPConst.NS_PHOTOSHOP, "DocumentAncestors");
                            app.activeDocument.xmpMetadata.rawData = xmp.serialize();

                            // $.writeln(app.activeDocument.name + "是否需要关闭窗口：" + close);
                            if (app.activeDocument !== mainDocument) {
                                app.activeDocument.close(SaveOptions.SAVECHANGES);
                            }else{
                                app.activeDocument.save();
                            }
                        }
                    } else {
                        clearDocumentAncestorsForAllLayers(curLayer);
                    }
                }
            } catch (e) {}
        }
        clearDocumentAncestorsForAllLayers(app.activeDocument);
    }
}

var mainDocument = app.activeDocument;
deleteDocumentAncestorsMetadata();
