var dishTypes = [
    {DishName: "Boil 'Em", DishID: "1"},
    {DishName: "Mash 'Em", DishID: "2"},
    {DishName: "Stick 'Em In A Stew", DishID: "3"}
];

// $(document).ready(function() {
//
//     $("#dish").kendoDropDownList({
//         dataTextField: "text",
//         dataValueField: "value",
//         dataSource: dishTypes,
//         index: 0,
//         change: onChange
//     });
//
//     function onChange() {
//         alert("POH-TAY-TOES!");
//     }
// });


var viewModel = kendo.observable({
    selectedDish: null,
    onChange: function() {
        alert("POH-TAY-TOES!");
    },
    dishes: new kendo.data.DataSource({ data: dishTypes })
});

kendo.bind($("#test"), viewModel);