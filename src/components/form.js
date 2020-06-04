import React, {useState} from "react";
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Button, FormGroup, Label} from 'reactstrap';
import './form.css';

export function PartInfo(props) {
    // const [title, setTitle] = useState("");
    // const [nucleotide, setNucleotide] = useState("");
    // const [detail, setDetail] = useState("");
    // const [secret, setSecret] = useState("");
    // const [organism, setOrganism] = useState("");
    // const [codon, setCodon] = useState("");
    // const [price, setPrice] = useState("");
    // const [error, setError] = useState(false);

    const handleValidSubmit = (event, values) => {
        console.log(values);
    }
    
    // const handleInvalidSubmit = (event, errors, values) => {
        // setTitle(values.title);
        // setNucleotide(values.nucleotide);
        // setDetail(values.detail);
        // setSecret(values.secret);
        // setOrganism(values.organism);
        // setCodon(values.codon);
        // setPrice(values.price);
        // setError(true);
    // }

    return (
        <>
        <div className="container">
            <div className="d-flex justify-content-center align-items-center h-100">
                <AvForm onValidSubmit={handleValidSubmit}>
                    <FormGroup>
                        <h4>Part Info</h4>
                    </FormGroup>
                    <AvGroup>
                        <Label for="title">Title*</Label>
                        <AvInput type="text" name="title" id="title" required />
                        <AvFeedback>This field is invalid!</AvFeedback>
                    </AvGroup>
                    <AvGroup>
                        <Label for="partType">Part type*</Label>
                        <AvField type="select" name="partType" id="partType" required>
                            <option>Other</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </AvField>
                    </AvGroup>
                    <AvGroup>
                        <Label for="library">Library(Leave this blank if the part is standalone)</Label>
                        <AvField type="select" name="library" id="library" required>
                            <option>--------</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </AvField>
                    </AvGroup>
                    <AvGroup>
                        <Label for="nucleotide">Nucleotide Sequence(non ATGC ignored, only revealed after purchase)*</Label>
                        <AvInput type="text" name="nucleotide" id="nucleotide" required/>
                        <AvFeedback>This field is invalid!</AvFeedback>
                    </AvGroup>
                    <AvGroup>
                        <Label for="detail">Detailed Information*</Label>
                        <AvInput type="text" name="detail" id="detail" required/>
                        <AvFeedback>This field is invalid!</AvFeedback>
                    </AvGroup>
                    <AvGroup>
                        <Label for="secret">Secret Information(only revealed after purchase)*</Label>
                        <AvInput type="text" name="secret" id="secret" placeholder="No secret information was listed for this part" required/>
                        <AvFeedback>This field is invalid!</AvFeedback>
                    </AvGroup>
                    <AvGroup>
                        <Label for="exampleFile">Datasheet(Keep files under {"<"} 25Mb)</Label>
                        <AvInput type="file" name="file" id="exampleFile" />
                    </AvGroup>
                    <AvGroup>
                        <Label for="organism">Organism origin*</Label>
                        <AvInput type="text" name="organism" id="organism" placeholder="None specified" required/>
                        <AvFeedback>This field is invalid!</AvFeedback>
                    </AvGroup>
                    <AvGroup>
                        <Label for="codon">Codon Optimization*</Label>
                        <AvInput type="text" name="codon" id="codon" placeholder="None specified" required/>
                        <AvFeedback>This field is invalid!</AvFeedback>
                    </AvGroup>
                    <AvGroup>
                        <Label for="price">Price*</Label>
                        <AvInput type="number" name="price" id="price" placeholder="50.0" min="1" required/>
                        <AvFeedback>This field is invalid!</AvFeedback>
                    </AvGroup>
                    <AvGroup>
                        <Label for="rbs">RBS Strength</Label>
                        <AvInput type="text" name="rbs" id="rbs" />
                    </AvGroup>

                    <p>By submitting, you agree to the <a href="">Strandbase Terms of Use.</a></p>
                    <Button type="submit" outline color="primary">Submit</Button>
                </AvForm>
            </div>                
        </div>
        </>
    );
}

export default PartInfo;