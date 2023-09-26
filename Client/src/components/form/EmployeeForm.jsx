import React from 'react'

const EmployeeForm = ({handleSubmit,value,setValue}) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control"  placeholder="Enter new category" value={value} onChange={(e)=> setValue(e.target.value)} />
                    <input type="number" className="form-control"  placeholder="Enter new category" value={value} onChange={(e)=> setValue(e.target.value)} />
                    <input type="text" className="form-control"  placeholder="Enter new category" value={value} onChange={(e)=> setValue(e.target.value)} />
                    <input type="text" className="form-control"  placeholder="Enter new category" value={value} onChange={(e)=> setValue(e.target.value)} />
                    <input type="text" className="form-control"  placeholder="Enter new category" value={value} onChange={(e)=> setValue(e.target.value)} />
                    <input type="text" className="form-control"  placeholder="Enter new category" value={value} onChange={(e)=> setValue(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary btn-fluid mt-2">Submit</button>
            </form>

        </>
    )
}

export default EmployeeForm