import { AbstractControl, ValidatorFn } from "@angular/forms";

export function toBase64(file: File){
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = (error) => reject(error);
  })
}

export function upperCap() : ValidatorFn {
  return (control: AbstractControl) => {
    const value = <string> control.value;
    if (!value) return null;
    if(value.length === 0) return null;

    const upper = value[0];
    if (upper !== upper.toUpperCase()) {
      return {
        upperL: {
          msg: 'La primera letra debe ser mayúscula'
        }
      };
    }
    return null;
  }
}
