const db = require("../db");

const fetchInformation = async (meta, collectionName) => {
  const package = db.collection(collectionName);
  let responseList = [];
  const querySnapshot = await package.get();
  await Promise.all(
    querySnapshot.docs.map(async (doc, index) => {
      responseList.push(doc.data());
      responseList[index].id = doc.id;
    })
  );

  return responseList;
};

const fetchSingleInfo = async (id, collectionName) => {
  const singlePackage = db.collection(collectionName).doc(id);
  let responseData = {};
  const querySnapshot = await singlePackage.get();

  responseData = querySnapshot.data();
  return responseData;
};

const getAllInfo = async (req, res) => {
  try {
    console.log(req.params);
    const data = await fetchInformation(false, req.params.info);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred1" });
  }
};
const getMetaInfo = async (req, res) => {
  try {
    const data = await fetchInformation(true, req.params.info);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred2" });
  }
};
const getSingleInfo = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(req.params);
    const data = await fetchSingleInfo(id, req.params.info);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred3" });
  }
};

module.exports = { getAllInfo, getMetaInfo, getSingleInfo };
