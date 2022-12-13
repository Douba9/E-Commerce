import React from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';

export default function Profil() {
    return (
        <section style={{ backgroundColor: '#eee' }} >
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol>
                        <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                            <MDBBreadcrumbItem>
                                <a href="#">User</a>
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem active>User Profil</MDBBreadcrumbItem>
                        </MDBBreadcrumb>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    
                    <MDBCol lg="8">
                        <MDBCard className="mb-4">
                            <MDBCardBody>
                                <MDBRow>
                                    <MDBCol sm="7">
                                    <i class="fas fa-marker"></i>
                                        <MDBCardText>Full Name</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted" type="text"></MDBCardText>
                                        <input type="text" id="typeText" class="form-control" placeholder='Your name'></input>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="9">
                                        <MDBCardText>Email</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted"></MDBCardText>
                                        <input type="text" id="typeText" class="form-control" placeholder='example@email.com'></input>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="9">
                                        <MDBCardText>Bio</MDBCardText>
                                        <div class="form-outline">
                                            <textarea class="form-control" id="textAreaExample" rows="3" ></textarea>
                                            
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                                
                                <MDBRow>
                                </MDBRow>
                                
                                <MDBRow>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBRow>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}