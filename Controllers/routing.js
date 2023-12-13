//@desc     gets all the sales orders
//@route    GET /api/test/callCentre/one_stream/sales_orders?
//@access   Public

exports.getSalesOrder = (req, res, next) => {
  res.status(200).json({ message: 'GET request received!' });
}

//@desc     gets all the campaigns
//@route    GET /api/test/callCentre/one_stream/campaigns
//@access   Public

exports.getCampaign = (req, res, next) => {
  res.status(200).json({ message: 'GET request received!' });
}
