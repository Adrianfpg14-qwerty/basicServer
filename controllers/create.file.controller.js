


import folderServices from "../services/folder.services.js";




const createFileController = async (req, res) => {

  console.log("creating new files")

  console.log("req.body")
  console.log(req.body)

  try {
    const { folderId, name, size, type, source, thumbnail } = await req.body;
    

    // if(folderId || _id || name || size || type || source || duration) return res.status(200).send("Datos incorrectos (when creating new file)");
    if(!folderId || !name || !type || !source || !thumbnail) return res.status(401).send("Datos incorrectos (when creating new file)");

    // console.log(folderId)

    const info = {
        folderId,
        name,
        size,
        type,
        source,
        thumbnail
    };

    
    const updatedFolder = await folderServices.AddFileToFolder(folderId, info);
    
    if (!updatedFolder) return res.status(404).send({success:false,code:'404',message:"Folder no encontrado"});

    return res.send({success:true,code:'200',message:"Archivo añadido con éxito",data:updatedFolder});
  } catch (error) {
    return res.status(500).send("Error al añadir el archivo a la carpeta");
  }

};


export default createFileController;