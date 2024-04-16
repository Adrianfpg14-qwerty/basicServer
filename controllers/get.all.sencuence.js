

import FolderService from "../services/folder.services.js"



export const getAllSecuence = async (req, res) => {

  console.log("getting all secuence")

  try {
    const info = await FolderService.GetAllSecuence();
    
    return res.status(200).send(info);
  } catch (error) {
    return res.status(401).send("Fallo al obtener el array de secuencia");
  }
};



