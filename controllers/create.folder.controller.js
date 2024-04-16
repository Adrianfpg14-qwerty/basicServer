

import FolderService from "../services/folder.services.js"




const createFolderController = async (req, res) => {

  console.log("creating new folder")

  try {
    const {nameFolder} = req.body;

    if(!nameFolder) return res.status(401).send("Debe ser un nombre valido");
    
    const existingNameFolder = await FolderService.FindByNameFolder(nameFolder);
    if (existingNameFolder) return res.status(409).send({errors: ["Carpeta ya existente con ese nombre"]});

    const files = []

    const info = {
        nameFolder,
        files
    };

    const infoToReturn = await FolderService.CreateFolder(info);

    return res.status(201).send(infoToReturn);
  } catch (error) {
    return res.status(400).send("Fallo al crear la carpeta: " + error);
  }

};




export default createFolderController;