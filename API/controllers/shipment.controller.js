const { Shipment } = require("../models");

const getShipmentList = async (req, res) => {
  const { page, limits } = req.query;
  const pageNumber = parseInt(page);
  const itemPerPage = parseInt(limits);
  try {
    const shipmentList = await Shipment.findAll();

    if (page) {
      let total = shipmentList.length;
      let start = (pageNumber - 1) * itemPerPage;
      let end = start + itemPerPage;
      const shipmentListPerPage = shipmentList.slice(start, end);
      res.status(200).send({
        shipmentListPerPage: shipmentListPerPage,
        totalShipment: total,
        page: pageNumber,
        limits: itemPerPage,
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getShipmentDetail = async (req, res) => {
  const { shipmentId } = req.query;
  try {
    const shipmentDetail = await Shipment.findOne({
      where: {
        id: shipmentId,
      },
    });
    res.status(200).send(shipmentDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getShipmentList,
  getShipmentDetail,
};
