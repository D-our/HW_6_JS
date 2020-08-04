
    const students = [
        {
            name: 'John Smith',
            marks: [10, 8, 6, 9, 8, 7 ]
        },
        {
            name: 'John Doe',
            marks: [ 9, 8, 7, 6, 7 ]
        },
        {
            name: 'Thomas Anderson',
            marks: [6, 7, 10, 8 ]
        },
        {
            name: 'Jean-Baptiste Emanuel Zorg',
            marks: [10, 9, 8, 9 ]
        }
    ]

    const arrOfAllGrades =   arrOfAllMarks();

    console.log(averageStudentMark(students[0]));
    console.log(averageGroupMark(arrOfAllGrades));

    function averageStudentMark (student) {
        return student.marks.reduce((mark, val) => mark + val, 0);

    }

    function arrOfAllMarks () {
        return students.flatMap((item) => item.marks);

    }

    function averageGroupMark (arrOfAllGrades) {
        let result =  arrOfAllGrades.reduce((a, b) => a + b);

        return result / arrOfAllGrades.length;

    }






