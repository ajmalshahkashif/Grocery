import React, { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import {
    CContainer,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CForm,
    CFormInput,
    CFormSelect,
    CButton,
} from '@coreui/react'

interface PatientForm {
    lastName: string
    gender: string
    dob: string
    mobileNo: string
    whatsAppNo: string
    email: string
    village: string
    city: string
    country: string
    address: string
    cnic: string
    passportNo: string
    barcodeNo: string
    bloodGroup: string
    description: string
}

const PatientRegister: React.FC = () => {
    const [form, setForm] = useState<PatientForm>({
        lastName: '',
        gender: '',
        dob: '',
        mobileNo: '',
        whatsAppNo: '',
        email: '',
        village: '',
        city: '',
        country: '',
        address: '',
        cnic: '',
        passportNo: '',
        barcodeNo: '',
        bloodGroup: '',
        description: '',
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const payload = {
            lastName: form.lastName,
            gender: form.gender,
            dob: form.dob || null,
            mobileNo: form.mobileNo,
            whatsAppNo: form.whatsAppNo || null,
            email: form.email || null,
            village: form.village || null,
            city: form.city || null,
            country: form.country || null,
            address: form.address || null,
            cnic: form.cnic || null,
            passportNo: form.passportNo || null,
            barcodeNo: form.barcodeNo || null,
            bloodGroup: form.bloodGroup || null,
            description: form.description || null,
        }

        try {
            const response = await fetch('/api/patients', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            })

            if (!response.ok) {
                const errorBody = await response.json().catch(() => null)
                console.error('Failed to save patient:', errorBody)
                return
            }

            const saved = await response.json()
            console.log('Saved patient:', saved)
            // e.g. reset form or navigate away here
        } catch (err) {
            console.error('Network error saving patient:', err)
        }
    }

    return (
        <CContainer fluid className="px-4">
            <CRow>
                <CCol xs={12}>
                    <CCard className="mb-4 w-100">
                        <CCardHeader>
                            <strong>Patient Registration</strong>
                        </CCardHeader>

                        <CCardBody>
                            <CForm onSubmit={handleSubmit}>
                                <CRow className="g-3">

                                    <CCol md={3}>
                                        <CFormInput
                                            label="Name *"
                                            name="lastName"
                                            value={form.lastName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </CCol>

                                    <CCol md={3}>
                                        <CFormInput
                                            label="Mobile No *"
                                            name="mobileNo"
                                            value={form.mobileNo}
                                            onChange={handleChange}
                                            required
                                        />
                                    </CCol>

                                    <CCol md={3}>
                                        <CFormInput
                                            label="WhatsApp No"
                                            name="whatsAppNo"
                                            value={form.whatsAppNo}
                                            onChange={handleChange}
                                        />
                                    </CCol>

                                    <CCol md={2}>
                                        <CFormSelect
                                            label="Gender *"
                                            name="gender"
                                            value={form.gender}
                                            onChange={handleChange}
                                            required>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </CFormSelect>
                                    </CCol>


                                    <CCol md={3}>
                                        <CFormInput
                                            label="Email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                        />
                                    </CCol>

                                    <CCol md={2}>
                                        <CFormInput
                                            type="date"
                                            label="Date of Birth"
                                            name="dob"
                                            value={form.dob}
                                            onChange={handleChange}
                                        />
                                    </CCol>


                                    <CCol md={2}>
                                        <CFormInput
                                            label="Village"
                                            name="village"
                                            value={form.village}
                                            onChange={handleChange}
                                        />
                                    </CCol>

                                    <CCol md={2}>
                                        <CFormInput
                                            label="City"
                                            name="city"
                                            value={form.city}
                                            onChange={handleChange}
                                        />
                                    </CCol>

                                    <CCol md={2}>
                                        <CFormInput
                                            label="Country"
                                            name="country"
                                            value={form.country}
                                            onChange={handleChange}
                                        />
                                    </CCol>

                                    <CCol md={3}>
                                        <CFormInput
                                            label="CNIC"
                                            name="cnic"
                                            value={form.cnic}
                                            onChange={handleChange}
                                        />
                                    </CCol>

                                    <CCol md={3}>
                                        <CFormInput
                                            label="Passport No"
                                            name="passportNo"
                                            value={form.passportNo}
                                            onChange={handleChange}
                                        />
                                    </CCol>

                                    <CCol md={2}>
                                        <CFormSelect
                                            label="Blood Group"
                                            name="bloodGroup"
                                            value={form.bloodGroup}
                                            onChange={handleChange}>
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                        </CFormSelect>
                                    </CCol>


                                    <CCol md={2}>
                                        <CFormInput
                                            label="Barcode No"
                                            name="barcodeNo"
                                            value={form.barcodeNo}
                                            onChange={handleChange}
                                        />
                                    </CCol>

                                    

                                    <CCol md={6}>
                                        <CFormInput
                                            component="textarea"
                                            label="Address"
                                            name="address"
                                            value={form.address}
                                            onChange={handleChange}
                                        />
                                    </CCol>

                                    
                                    <CCol md={6}>
                                        <CFormInput
                                            component="textarea"
                                            label="Description"
                                            name="description"
                                            value={form.description}
                                            onChange={handleChange}
                                        />
                                    </CCol>
                                </CRow>

                                <div className="mt-4">
                                    <CButton color="primary" type="submit">
                                        Save Patient
                                    </CButton>
                                </div>
                            </CForm>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </CContainer>
    )
}

export default PatientRegister
