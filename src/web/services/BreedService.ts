import { url_breed_list_all, dogceo_resp_status_success } from "../constants";
import { BreedJSON, ReturnMessage } from "../models";
import { ServiceNotAvailableException, ApiIncompatibleException } from "../exceptions";
import fetch from "node-fetch";

export class BreedService {

  async listAll(): Promise<BreedJSON[]> {
    const that = this;
    return new Promise<BreedJSON[]> ((resolve, reject) => {
      fetch(url_breed_list_all)
        .then(response => response.json())
        .then(body => {
          try {
            resolve(that.parseDogCeoRetMsg(body));
          } catch (err) {
            reject(new ApiIncompatibleException());
          }
        })
        .catch(err => {
          reject(new ServiceNotAvailableException());
        });
    });
  }

  private parseDogCeoRetMsg(retMsg: ReturnMessage): BreedJSON[] {
    const retVal: BreedJSON[] = [];
    if (retMsg.status === dogceo_resp_status_success) {
      let breedMap = retMsg.message;
      for (let eachBreed in breedMap) {
        let subArray: string[] = (<any>breedMap)[eachBreed];
          if (subArray.length === 0){
            retVal.push({breed: eachBreed});
          } else {
            for (let i in subArray) {
              retVal.push({breed: eachBreed, subbreed: subArray[i]});
            }
          }
      }
    }
    return retVal;
  }
}
