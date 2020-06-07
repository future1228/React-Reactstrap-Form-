import React, {useState, useEffect} from "react";
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Button, FormGroup, Label, Input, Col, Row, FontAwesomeIcon} from 'reactstrap';
import './form.css';

const AddField = (props) => {
    return(
        <>
            <AvGroup>
                {/* <Label for="title">{props.label}</Label> */}
                <AvInput type="text" name="title" id="title" required />
                <AvFeedback>This field is invalid!</AvFeedback>
            </AvGroup>
        </>
    )
}

export function PartInfo(props) {
    const [rbsInfo, setRbsInfo] = useState(false);
    const [addField, setAddField] = useState([]);
    // const [label, setLabel] = useState();

    useEffect(() => {
        setAddField(addField)
    })

    const handleValidSubmit = (event, values) => {
        console.log(values);
    }

    const handlePartType = (event, values) => {
        console.log(values);
        if(values == 'RBS')
            setRbsInfo(true);
    }

    function handleAddField() {
        let addId = addField.length + 1
        setAddField([...addField, {id: addId}])
    }

    // const handleTitleChange = (event) => {
    //     setLabel(event.target.value);
    // }
    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center h-100">
                <AvForm onValidSubmit={handleValidSubmit}>
                    <FormGroup>
                        <h4>Part Info</h4>
                    </FormGroup>
                    <AvGroup>
                        <Label for="title">Title*</Label>
                        <Row className="m-0">
                        <Col md={11} className="pl-0"><AvInput type="text" name="title" id="title" required /></Col>
                        <Col md={1} className="p-0"><Button type="button" outline color="primary" onClick={handleAddField}>-</Button></Col>
                        </Row>
                        <AvFeedback>This field is invalid!</AvFeedback>
                    </AvGroup>
                    <AvGroup>
                        <Label for="partType">Part type*</Label>
                        <AvField type="select" name="partType" id="partType" onChange={handlePartType} required>
                            <option>Other</option>
                            <option>promoter</option>
                            <option>monoclonal antibody</option>
                            <option>domain</option>
                            <option>enzyme</option>
                            <option>reporter</option>
                            <option>RBS</option>
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
                    <AvGroup style={{ display: rbsInfo ? "block" : "none" }}>
                        <Label for="rbs">RBS Strength</Label>
                        <AvInput type="text" name="rbs" id="rbs" />
                    </AvGroup>
                    {addField.map(addfield =><AddField key={addfield.id} />)}

                        {/* <Label for="exampleEmail" md={2}>Label :</Label>
                        <Col md={7}>
                            <Input type="text" name="label" placeholder="Type new label" />
                        </Col> */}
                    <AvGroup className="addBtn">
                        <Button type="button" color="primary" className="mb-4" onClick={handleAddField}>+</Button>
                    </AvGroup>
                    <p>By submitting, you agree to the <a href="">Strandbase Terms of Use.</a></p>
                    <Button type="submit" outline color="primary" className="mt-1">Submit</Button>
                </AvForm>
            </div>                
        </div>
    );
}

export default PartInfo;