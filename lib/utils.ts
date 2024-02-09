import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ERROR_STATUS_CODE } from './core/constant';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const errorFormat = (error: any) => {
  if (ERROR_STATUS_CODE.includes(error.response.status)) {
    if ('errors' in error.response.data) {
      if (Array.isArray(error.response.data.errors)) {
        return error.response.data.errors.join(',');
      } else if (typeof error.response.data.errors === 'object') {
        for (const [key, value] of Object.entries(error.response.data.errors)) {
          if (Array.isArray(value) && key) {
            return value.join(',');
          } else {
            return value;
          }
        }
      } else {
        return error.response.data.errors;
      }
    } else if ('message' in error.response.data) {
      if (Array.isArray(error.response.data.message)) {
        return error.response.data.message.join('');
      } else {
        return error.response.data.message;
      }
    }
  } else if (error.response.status === 401) {
    return error.response.data.message;
  } else {
    return 'Something went wrong while processing your request';
  }
};
