import { tokenKey } from "../config";
import apiFetch from "./api-fetch";

export async function getProperties() {
  const properties = await apiFetch(`properties`);

  return properties;
}

export async function createProperty(newProperty) {
  const property = await apiFetch("properties", { 
  body: newProperty
  })
  return property;
}

export async function showProperty(id) {
  const showProperty = await apiFetch(`properties/${id}`);
    
    return showProperty;
}
  
export async function deleteProperty(id) {
  await apiFetch("properties", { method: "DELETE" });
  sessionStorage.removeItem(tokenKey);
}
  



// INVOLVED_PROPERTIES

// export async function createProperty() {
//   const { ...property } = await apiFetch("/involved_properties", { 
//   body: newProperty,

//   })}

// export async function getFavorites(id) {
//   const favorites = await apiFetch (`/involved_properties`);
//   return favorites;
// }
