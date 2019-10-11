import chai from "chai";
import chaiHttp from "chai-http";
import { app } from "../web";
import { url_breed_list_all, dogceo_resp_status_success } from "../web/constants";
import { BreedJSON } from "../web/models";

// Configure chai
chai.use(chaiHttp);
chai.should();

function breedSet(breeds: Array<BreedJSON>): Set<string> {
  let breedSet = new Set<string>();
  for(let key in breeds) {
    let oneBreed: BreedJSON = (<any>breeds)[key];
    breedSet.add(oneBreed.breed);
  }
  return breedSet;
}

describe("breeds service", () => {
  describe("GET /", () => {
    //Test the happy path.
    it("should get all breeds and subbreeds with the defined data format.", (done) => {

      chai.request(app)
        .get("/api/breeds")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('Array');
          res.body.length.should.eq(135);
          breedSet(res.body).size.should.eq(89);
          breedSet(res.body).has("akita").should.eq(true);

          done();
        });

    });
  });
});
