import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthorizationForm } from '../Section/Authorization/Other/Data types/Interfaces';
import { useDispatch } from 'react-redux';
import { setAuthForm, setEmailForAuthorization } from '../redux/Authorization/Actions';
import { Dispatch, UnknownAction } from 'redux';

export const initObject: AuthorizationForm = {
    id:"",
    email: "",
    name: '',
    surname: '',
    date: '',
    gender: "",
    sexualOrientation: "",
    height: "",
    childrenStatus: "",
    alcoholStatus: "",
    smokeStatus: "",
    languages: [],
    searchStatus: "",
    selfInformation: "",
    linkToPhoto:[],
    searchRadius: "2",
    searchAge: "18-99",
    searchGender: "Чоловік",
    secondPassword: "",
    geoLocation:-2
  };
export const authFormKey:string='authorizationForm'
export const initializationdao = async () => {
  try {
    const existingData = await AsyncStorage.getItem(authFormKey);

    if (existingData === null){

      const jsonData = JSON.stringify(initObject)

      await AsyncStorage.setItem(authFormKey, jsonData);

      //console.log('Пустий об\'єкт JSON було успішно збережено.');
    } else {
    }
  } catch (error) {
    console.error('Помилка при збереженні пустого об\'єкта JSON:', error);
  }
};

export const getAuthObjectFromDao = async (dispatch:Dispatch<UnknownAction>):Promise<void>=> {
    try {
      const jsonData = await AsyncStorage.getItem(authFormKey);
      
      if (jsonData !== null) {
        const obj=JSON.parse(jsonData);
        dispatch(setAuthForm(obj))
      } else {
        console.log('Дані за вказаним ключем не знайдено.');
        
      }
    } catch (error) {
      console.error('Помилка при отриманні даних з AsyncStorage:', error);
     
    }
  };

  export const updateAuthObjectInDao = async (
    key: string,
    newValue: any,
  ): Promise<void> => {
    try {
      const jsonData = await AsyncStorage.getItem(authFormKey);
      if (jsonData !== null) {
        const currentObj = JSON.parse(jsonData);
        currentObj[key] = newValue;
    
        await AsyncStorage.setItem(authFormKey, JSON.stringify(currentObj));
       // console.log(`Значення для ключа '${key}' успішно оновлено в AsyncStorage.`);
      } else {
        console.log('Дані за вказаним ключем не знайдено.');
      }
    } catch (error) {
      console.error('Помилка при оновленні об\'єкта в AsyncStorage:', error);
    }
  };
