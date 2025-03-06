export const SinhVien = () => {
    return (
        <div style={{ border: '1px solid red'}}>
            <h2>STUDENT K48</h2>
        </div>
    )
};

export const Student = (props) => {
    return (
        <div style={{border: '1px solid black', padding: '10px', margin: '10px'}}>
            <h1>Student</h1>
            <h2>{props.id} - {props.name}</h2>
            <h2>GPA: {props.gpa}</h2>
        </div>
    );
};