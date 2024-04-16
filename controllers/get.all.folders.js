

import FolderService from "../services/folder.services.js"



export const getAllFolders = async (req, res) => {

  console.log("getting all folders")

  try {
    const info = await FolderService.GetAllFolders();
    
    return res.status(200).send(info);
  } catch (error) {
    return res.status(401).send("Fallo al obtener todos los registros");
  }
};




export const createSecuenceController = async (req, res) => {

  try {
    const { files } = req.body;

    const secuence = await FolderService.updateSecuence(files);

    return res.status(201).send(secuence);
  } catch (error) {
    // console.log(error);
    return res.status(401).send("Fallo al crear la carpeta");
  }

};


export default getAllFolders;