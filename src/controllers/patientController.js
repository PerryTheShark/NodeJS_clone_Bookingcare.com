import patientService from "../services/patientService";

let postBookAppointment = async (req, res) => {
  try {
    let infor = await patientService.postBookAppointment(req.body);
    return res.status(200).json(infor);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMesage: "Error from the server",
    });
  }
};

module.exports = {
  postBookAppointment: postBookAppointment,
};
