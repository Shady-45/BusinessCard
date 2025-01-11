export const _NAME_VALIDATIONS = {
  required: "Name is required!😉",
  maxLength: {
    value: 30,
    message: "Name must not exceed 30 characters!😅",
  },
  pattern: {
    value: /^[a-zA-Z\s]+$/,
    message: "Invalid Name! Only letters and spaces are allowed.☠️",
  },
}

export const _EMAIL_VALIDATIONS = {
    required: "Email is is required!😉",
    pattern: {
      value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message:"Invalid Email Address ☠️"
    }
  };

  export const _PHONE_NUMBER_VALIDATIONS = {
    required: 'Phone number is required! 😉',
    pattern: {
      value: /^[0-9]{10}$/,
      message: 'Phone number must be exactly 10 digits!',
    },
    maxLength: {
      value: 10,
      message: 'Phone number cannot be more than 10 digits!',
    },
    minLength: {
      value: 10,
      message: 'Phone number must be exactly 10 digits!',
    }
  };
  

  export const _ADDRESS_VALIDATIONS={
    required:"Address is required!😉",
    maxLength:{
      value:100,
      message:"Address must not exceed beyond 100 charecters!😅"
    }

  }
  export const _ORGANIZTION_VALIDATIONS={
    required:"Organization is required!😉",
    maxLength:{
      value:40,
      message:"Address must not exceed beyond 40 charecters!😅"
    }

  }
  export const _DESIGNATION_VALIDATIONS={
    required:"Designation is required!😉",
    maxLength:{
      value:40,
      message:"Designation must not exceed beyond 30 charecters!😅"
    }

  }
  export const _IMAGE_VALIDATIONS={
    required: 'Image is required!😉',
    validate: {
      fileType: (files:any) =>
        files && files[0] && ['image/jpeg', 'image/png'].includes(files[0].type) ||
        'Only JPEG or PNG images are allowed!',
      fileSize: (files:any) =>
        files && files[0] && files[0].size <= 2 * 1024 * 1024 ||
        'File size must be less than 2MB!',
    },
  }