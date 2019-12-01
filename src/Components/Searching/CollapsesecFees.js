import React, { Component } from 'react'
import { fees_structure } from '../../../src/Fees'

export class CollapsesecFees extends Component {
    constructor(props) {
        super(props)

        this.state = {
            School_fee: null
        }
    }
    printFees=()=> {
        var prtContent = document.getElementById("feeprint").innerHTML;
        var WinPrint = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
        WinPrint.document.write('<html><head>');
        WinPrint.document.write('<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" type="text/css" media="screen,print">') 
        WinPrint.document.write('</head><body">');
        WinPrint.document.write(prtContent);
        WinPrint.document.write('</body></html>');
        WinPrint.setTimeout(() => {
            WinPrint.focus()
            WinPrint.print();
            WinPrint.close()
        },500)

    }
    render() {
        const Fees = fees_structure[Math.floor(Math.random() * 10) + 1]
        return (
            <div>
                <div id="feeprint" className="d-flex flex-column">
                    <h3>Fees For Year {Fees.Year === undefined ? "2019-2020" : Fees.Year}</h3>
                    
                    <div className="d-flex justify-content-between pt-3 border-bottom">
                        <span className="text-secondary ">Admission Test Fee</span>
                        <span className="pr-3">{Fees.Admission_test === "" ? "Not Available" : "PKR " + Fees.Admission_test}</span>
                    </div>
                    <div className="d-flex justify-content-between pt-3 border-bottom">
                        <span className="text-secondary">Registration Fee</span>
                        <span className="pr-3">{Fees.Registration_fee === "" ? "Not Available" : "PKR " + Fees.Registration_fee}</span>
                    </div>
                    <div className="d-flex justify-content-between pt-3 border-bottom">
                        <span className="text-secondary ">Admission Fee Pre School</span>
                        <span className="pr-3">{Fees.Fee_preschool === "" ? "Not Availbe" : "PKR " + Fees.Fee_preschool}</span>
                    </div>
                    <div className="d-flex justify-content-between pt-3 border-bottom">
                        <span className="text-secondary ">Admission Fee Pre KG</span>
                        <span className="pr-3">{Fees.Fee_prekg === "" ? "Not Available" : "PKR " + Fees.Fee_prekg}</span>
                    </div>
                    <div className="d-flex justify-content-between pt-3 border-bottom">
                        <span className="text-secondary">Admission Fee KG To Grade1</span>
                        <span className="pr-3">{Fees.Fee_kgtograde1 === "" ? "Not Availble" : "PKR " + Fees.Fee_kgtograde1}</span>
                    </div>
                    <div className="d-flex justify-content-between pt-3 border-bottom">
                        <span className="text-secondary">Admission Fee Grade2 To Grade5</span>
                        <span className="pr-3">{Fees.Fee_grade2tograde5 === "" ? "Not Available" : "PKR " + Fees.Fee_grade2tograde5}</span>
                    </div>
                    <div className="d-flex justify-content-between pt-3 border-bottom">
                        <span className="text-secondary">Admission Fee Grade6 To Grade8</span>
                        <span className="pr-3">{Fees.Fee_grade6tograde8 === "" ? "Not Available" : "PKR " + Fees.Fee_grade6tograde8}</span>
                    </div>
                    <div className="d-flex justify-content-between pt-3 border-bottom">
                        <span className="text-secondary">Admission Fee Grade9 To Grade10</span>
                        <span className="pr-3">{Fees.Fee_grade9tograde10 === "" ? "Not Available" : "PKR " + Fees.Fee_grade9tograde10}</span>
                    </div>
                    <div className="d-flex justify-content-between pt-3 border-bottom">
                        <span className="text-secondary">Transport Fee</span>
                        <span className="pr-3">{Fees.Transport_fee === "" ? "Not Availble" : "PKR " + Fees.Transport_fee}</span>
                    </div>
                    <div className="d-flex justify-content-between pt-3 border-bottom">
                        <span className="text-secondary">Exams Fee</span>
                        <span className="pr-3">{Fees.Exam_fees === "" ? "Not Available" : "PKR " + Fees.Exam_fees}</span>
                    </div>
                    <div className="d-flex justify-content-between pt-3 border-bottom">
                        <span className="text-secondary">Uniform Fee</span>
                        <span className="pr-3">{Fees.Uniform === "" ? "Not Available" : "PKR " + Fees.Uniform}</span>
                    </div>
                    <div className="d-flex justify-content-between pt-3 border-bottom">
                        <span className="text-secondary">Books Fee</span>
                        <span className="pr-3">{Fees.Books === "" ? "Not Available" : "PKR " + Fees.Books}</span>
                    </div>
                    <div className="d-flex justify-content-start pt-3">
                        <span className="text-secondary pr-3"><span className="text-danger">Note:</span> This provided information can be varied. For further information please call on given numbers.</span>
                    </div>
                </div>
                <div className="d-flex justify-content-start py-2 px-2">
                <button className="btn btn-primary" onClick={this.printFees}>Save As PDF</button>
                </div>
            </div>
        )
    }
}

export default CollapsesecFees
