/* eslint-disable consistent-return */
exports.theTypePlace = (body) => {
  const inputsString = ['name', 'description'];
  const inputsInt = ['rooms', 'bathrooms', 'max_guests', 'price_by_night'];
  const key = [];
  inputsString.forEach((element) => {
    const type = typeof body[element];

    // eslint-disable-next-line eqeqeq
    if (type !== 'string' || type == '') {
      key.push(element);
    }
  });

  inputsInt.forEach((element) => {
    const type = typeof body[element];

    if (type !== 'number') {
      key.push(element);
    }
  });

  return key;
};

exports.variblePlace = (body) => {
  const inputs = ['name', 'description', 'rooms', 'bathrooms', 'max_guests', 'price_by_night', 'available'];

  const key = [];
  Object.keys(body).forEach((element) => {
    if (inputs.indexOf(element) < 0) {
      key.push(element);
    }
  });
  return key;
};

exports.requiresPlace = (body) => {
  const inputs = ['name', 'description', 'rooms', 'bathrooms', 'max_guests', 'price_by_night'];
  const key = [];
  inputs.forEach((element) => {
    if (body[element] === undefined) {
      key.push(element);
    }
  });
  return key;
};

// inscription

exports.dataType = (body) => {
  const inputsString = ['role', 'first_name', 'last_name', 'email', 'password'];

  const key = [];
  inputsString.forEach((element) => {
    const type = typeof body[element];
    if (type !== 'string') {
      key.push(element);
    }
  });
  return key;
};

exports.requiresInputs = (body) => {
  const inputs = ['role', 'first_name', 'last_name', 'email', 'password'];
  const key = [];
  inputs.forEach((element) => {
    if (body[element] === undefined) {
      key.push(element);
    }
  });
  return key;
};
