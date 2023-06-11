const db = require("../db");

const fetchPackages = async (packageType, meta) => {
  const package = db.collection(packageType);
  let responseList = [];
  const querySnapshot = await package.get();
  await Promise.all(
    querySnapshot.docs.map(async (doc, index) => {
      if (meta) {
        responseList.push({
          id: doc.id,
          title: doc.data().title,
          description: doc.data().description.overview,
          image: doc.data().images[0],
        });
      } else {
        responseList.push(doc.data());
        responseList[index].details = {};
        const details = Object.keys(doc.data().details);
        await Promise.all(
          details.map(async (keyName) => {
            responseList[index].details[keyName] = [];
            await Promise.all(
              doc.data().details[keyName].map(async (reference, refIndex) => {
                const snapShot = await reference.get();
                if (keyName === "cities") {
                  responseData.details[keyName].push({
                    title: snapShot.data().title,
                    description: snapShot.data().description,
                    image: snapShot.data().images[0],
                    id: snapShot.id,
                  });
                } else {
                  responseData.details[keyName].push({
                    ...snapShot.data(),
                    id: snapShot.id,
                  });
                }
                // console.log(snapShot.data());
              })
            );
          })
        );
      }
    })
  );

  return responseList;
};

const fetchSinglePackages = async (packageType, id) => {
  const singlePackage = db.collection(packageType).doc(id);
  let responseData = {};
  const querySnapshot = await singlePackage.get();

  responseData = querySnapshot.data();
  responseData.details = {};
  const details = Object.keys(querySnapshot.data().details);
  console.log(details);
  await Promise.all(
    details.map(async (keyName) => {
      responseData.details[keyName] = [];
      await Promise.all(
        querySnapshot.data().details[keyName].map(async (reference) => {
          const snapShot = await reference.get();
          if (keyName === "cities") {
            responseData.details[keyName].push({
              title: snapShot.data().title,
              description: snapShot.data().description,
              image: snapShot.data().images[0],
              id: snapShot.id,
            });
          } else {
            responseData.details[keyName].push({
              ...snapShot.data(),
              id: snapShot.id,
            });
          }
          // console.log(snapShot.data());
        })
      );
    })
  );
  return responseData;
};

const getPackages = async (req, res) => {
  try {
    const type = req.query.type || "package";
    const data = await fetchPackages(type, false);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};
const getMetaPackages = async (req, res) => {
  try {
    const type = req.query.type || "package";
    const data = await fetchPackages(type, true);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};
const getSinglePackage = async (req, res) => {
  try {
    const id = req.params.id;
    const type = req.query.type || "package";
    console.log(id);
    const data = await fetchSinglePackages(type, id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = { getPackages, getSinglePackage, getMetaPackages };
