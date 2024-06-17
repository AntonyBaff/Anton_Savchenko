let averGrade=59;

let GradeName;

switch (true) {
    case averGrade >=91:
        GradeName = "Відмінно";
        break;
    case averGrade >=81:
        GradeName = "Дуже добре";
        break;
    case averGrade >=71:
        GradeName = "Добре";
        break;
    case averGrade >=60:
        GradeName = "Задовільно";
        break;

        default:
            GradeName="Незадовільно";
}
console.log(GradeName);