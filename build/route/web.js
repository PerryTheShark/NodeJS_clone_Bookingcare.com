"use strict";

var _express = _interopRequireDefault(require("express"));
var _homeController = _interopRequireDefault(require("../controllers/homeController"));
var _userController = _interopRequireDefault(require("../controllers/userController"));
var _doctorController = _interopRequireDefault(require("../controllers/doctorController"));
var _patientController = _interopRequireDefault(require("../controllers/patientController"));
var _specialtyController = _interopRequireDefault(require("../controllers/specialtyController"));
var _clinicController = _interopRequireDefault(require("../controllers/clinicController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
var initWebRoutes = function initWebRoutes(app) {
  //Home Controller
  router.get("/", _homeController["default"].getHomePage);
  router.get("/about", _homeController["default"].getAboutPage);
  router.get("/crud", _homeController["default"].getCRUD);
  router.post("/post-crud", _homeController["default"].postCRUD);
  router.get("/get-crud", _homeController["default"].displayGetCRUD);
  router.get("/edit-crud", _homeController["default"].getEditCRUD);
  router.post("/put-crud", _homeController["default"].putCRUD);
  router.get("/delete-crud", _homeController["default"].deleteCRUD);
  //User Controller
  router.post("/api/login", _userController["default"].handleLogin);
  router.get("/api/get-all-users", _userController["default"].handleGetAllUsers);
  router.post("/api/create-new-user", _userController["default"].handleCreateNewUser);
  router.put("/api/edit-user", _userController["default"].handleEditUser);
  router["delete"]("/api/delete-user", _userController["default"].handleDeleteUser);
  router.get("/api/allcode", _userController["default"].getAllCode);
  //doctorController
  router.get("/api/top-doctor-home", _doctorController["default"].getTopDoctorHome);
  router.get("/api/get-all-doctors", _doctorController["default"].getAllDoctors);
  router.post("/api/save-infor-doctor", _doctorController["default"].postInforDoctor);
  router.get("/api/get-detail-doctor-by-id", _doctorController["default"].getDetailDoctorById);
  router.post("/api/bulk-create-schedule", _doctorController["default"].bulkCreateSchedule);
  router.get("/api/get-schedule-doctor-by-date", _doctorController["default"].getScheduleByDate);
  router.get("/api/get-extra-infor-doctor-by-id", _doctorController["default"].getExtraInforDoctorById);
  router.get("/api/get-profile-doctor-by-id", _doctorController["default"].getProfileDoctorById);
  router.get("/api/get-list-patient-for-doctor", _doctorController["default"].getListPatientForDoctor);
  router.post("/api/send-remedy", _doctorController["default"].sendRemedy);

  //Patient Controller
  router.post("/api/patient-book-appointment", _patientController["default"].postBookAppointment);
  router.post("/api/verify-book-appointment", _patientController["default"].postVerifyBookAppointment);
  //Specialty Controller
  router.post("/api/create-new-specialty", _specialtyController["default"].createSpecialty);
  router.get("/api/get-all-specialty", _specialtyController["default"].getAllSpecialty);
  router.get("/api/get-detail-specialty-by-id", _specialtyController["default"].getDetailSpecialtyById);
  //Clinic Controller
  router.post("/api/create-new-clinic", _clinicController["default"].createClinic);
  router.get("/api/get-clinic", _clinicController["default"].getAllClinic);
  router.get("/api/get-detail-clinic-by-id", _clinicController["default"].getDetailClinicById);
  return app.use("/", router);
};
module.exports = initWebRoutes;