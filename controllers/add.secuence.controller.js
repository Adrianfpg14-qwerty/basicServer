import FolderService from "../services/folder.services.js"


export const createSecuenceController = async (req, res) => {

  console.log("updating secuence")
  console.log("req.body")
  console.log(req.body)


  try {
    const { files } = req.body;

    console.log("files")
    console.log(files)

    const temporalArray = [];

    files.forEach((element) => {
        temporalArray.push(
          {
            name: element.name,
            type: element.type,
            source: element.source,
            thumbnail: element.thumbnail
          }
        )
    } );

    console.log(temporalArray)

    const secuence = await FolderService.updateSecuence(temporalArray);

    io.emit("sendingVideos", {
      objeto: temporalArray
    })

    return res.status(201).send(secuence);
  } catch (error) {
    // console.log(error);
    return res.status(401).send("Fallo al actualizar el array" + error);
  }

};

export default createSecuenceController;