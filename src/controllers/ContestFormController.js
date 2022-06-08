const ContestFormModel = require("../models/ContestFormModel");
const catchAsync = require("../utils/catchAsync");
const ValidationUtils = require("../utils/ValidationUtils");

exports.createContestFormData = catchAsync(async (req, res, next) => {
  const {
    userName,
    spouseName,
    dateOfWedding,
    email,
    phoneNumber,
    city,
    description,
    youtubeLink,
    tncAcceptance,
  } = req.body;
  ValidationUtils.validateStringNotEmpty("User name", userName);
  ValidationUtils.validateStringNotEmpty("Spouse name", spouseName);
  ValidationUtils.validateStringNotEmpty("Date of wedding", dateOfWedding);
  ValidationUtils.validateIsEmail("Email", email);
  ValidationUtils.validateIsNumber("Phone Number", phoneNumber);
  ValidationUtils.validateStringNotEmpty("City", city);
  ValidationUtils.validateStringNotEmpty("Description", description);
  ValidationUtils.validateStringNotEmpty("Youtube Link", youtubeLink);
  ValidationUtils.validateIsBoolean(
    "Terms and Conditions acceptance",
    tncAcceptance
  );
  const bodyFields = {
    userName,
    spouseName,
    dateOfWedding,
    email,
    phoneNumber,
    city,
    description,
    youtubeLink,
    tncAcceptance,
  };
  const response = await ContestFormModel.create(bodyFields);
  res.send(response);
});
