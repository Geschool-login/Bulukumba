import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import './style.css'

export default function Index() {

    const [summary, setSummary] = useState({})

    const getSummary = useCallback(async () => {
        try {
            let response = await axios.get('_api/main/stats')
            setSummary(response.data.summary)
        } catch (e) {
            console.log(e.message)
        }
    }, [setSummary]);

    useEffect(() => {
        getSummary();
    }, [getSummary])

    return (
        <div className="data">
            <div className="data-box d-flex mb-5">
                <div className="data-item">
                    <div className="col-12 px-3 mb-4">
                        <h4>Guru</h4>
                    </div>
                    <div className="d-flex justify-content-center">
                        <fieldset className="col-5 mr-3 fieldset">
                            <legend className="legend float-none">Harian</legend>
                            {summary.teachers_1d > 0 ? summary.teachers_1d : '0'}
                        </fieldset>
                        <fieldset className="col-5 fieldset">
                            <legend className="legend float-none">Total</legend>
                            {summary.teachers > 0 ? summary.teachers : '0'}
                        </fieldset>
                    </div>
                </div>
                <div className="data-item border-white">
                    <div className="col-12 px-3 mb-4">
                        <h4>Sekolah</h4>
                    </div>
                    <div className="d-flex justify-content-center">
                        <fieldset className="col-5 mr-3 fieldset">
                            <legend className="legend float-none">Harian</legend>
                            {summary.schools_1d > 0 ? summary.schools_1d : '0'}
                        </fieldset>
                        <fieldset className="col-5 fieldset">
                            <legend className="legend float-none">Total</legend>
                            {summary.schools > 0 ? summary.schools : '0'}
                        </fieldset>
                    </div>
                </div>
                <div className="data-item">
                    <div className="col-12 px-3 mb-4">
                        <h4>Siswa</h4>
                    </div>
                    <div className="d-flex justify-content-center">
                        <fieldset className="col-5 mr-3 fieldset">
                            <legend className="legend float-none">Harian</legend>
                            {summary.students_1d > 0 ? summary.students_1d : '0'}
                        </fieldset>
                        <fieldset className="col-5 fieldset">
                            <legend className="legend float-none">Total</legend>
                            {summary.students > 0 ? summary.students : '0'}
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    )
}
