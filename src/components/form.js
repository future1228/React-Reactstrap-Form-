import React, {useState, useEffect} from "react";
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Button, FormGroup, Label, Col, Row} from 'reactstrap';
import './form.css';

const AddField = (props) => {
    return(
        <>
            <AvGroup>
                <Label for={props.field.label}>{props.field.label}*</Label>
                <Row className="m-0">
                <Col md={11} className="pl-0"><AvInput type="text" name={props.field.label} required /></Col>
                <Col md={1} className="p-0"><Button type="button" outline color="primary" onClick={() => props.handleDelete(props.field.id)}>-</Button></Col>
                </Row>
                <AvFeedback>This field is invalid!</AvFeedback>
            </AvGroup>
        </>
    )
}

export function PartInfo(props) {
    const [rbsInfo, setRbsInfo] = useState(false);
    const [addField, setAddField] = useState([
        {
            id:1,
            label:"Title"
        },{
            id:2,
            label:"Description"
        },{
            id:3,
            label:"Start"
        },{
            id:4,
            label:"End"
        }
    ]);
    useEffect(() => {
        setAddField(addField)
    })

    const handleValidSubmit = (event, values) => {
        console.log(values);
    }

    const handlePartType = (event, values) => {
        if(values === 'RBS')
            setRbsInfo(true);
        else
            setRbsInfo(false);
    }

    function handleAddField() {
        let addId = 0;
        let Label = "";
        if(addField.length >= 4){
            alert("You can't add field anymore!");
        } else {
            for(let i = 1; i < 5; i++){
                let found = addField.some(el => el.id === i);
                if (!found) {
                    addId = i;
                    break;
                }
            }
            switch(addId){
                case 1:
                    Label="Title";
                    break;
                case 2:
                    Label="Description";
                    break;
                case 3:
                    Label="Start";
                    break;
                case 4:
                    Label="End";
                    break;
                default:
            }
            setAddField([...addField, {id: addId, label:Label}])
        }
    }

    function handleDeleteField(id){
        let fields = addField.filter(addfield => addfield.id !== id)
        setAddField(fields)
    }
    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center h-100">
                <AvForm onValidSubmit={handleValidSubmit}>
                    <FormGroup>
                        <h4>Part Info</h4>
                    </FormGroup>
                    {addField.map(data =><AddField key={data.id} field={data} handleDelete={handleDeleteField}/>)}
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