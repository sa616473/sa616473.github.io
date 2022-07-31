var salesTab = new bootstrap.Tab(document.querySelector('#sales'))
var reSalesTab = new bootstrap.Tab(document.querySelector('#re-sale'))
var salePriceTab = new bootstrap.Tab(document.querySelector('#sale-price'))

function writeSalesCharts(data) {
    document.getElementById("chart-sales1").innerHTML = "";
    document.getElementById("chart-sales2").innerHTML = "";
    document.getElementById("chart-sales3").innerHTML = "";
    document.getElementById("chart-sales4").innerHTML = "";
    document.getElementById("chart-sales5").innerHTML = "";
    document.getElementById("chart-sales6").innerHTML = "";
    document.getElementById("chart-sales7").innerHTML = "";
    document.getElementById("chart-sales8").innerHTML = "";
    document.getElementById("chart-sales9").innerHTML = "";
    renderSalesChart(data);
}
function writeReSalesCharts(data) {
    document.getElementById("chart-re-sales1").innerHTML = "";
    document.getElementById("chart-re-sales2").innerHTML = "";
    document.getElementById("chart-re-sales3").innerHTML = "";
    document.getElementById("chart-re-sales4").innerHTML = "";
    document.getElementById("chart-re-sales5").innerHTML = "";
    document.getElementById("chart-re-sales6").innerHTML = "";
    document.getElementById("chart-re-sales7").innerHTML = "";
    document.getElementById("chart-re-sales8").innerHTML = "";
    document.getElementById("chart-re-sales9").innerHTML = "";
    renderReSalesChart(data);
}
function writeSalesPriceCharts(data) {
    document.getElementById("chart-sale-price1").innerHTML = "";
    document.getElementById("chart-sale-price2").innerHTML = "";
    document.getElementById("chart-sale-price3").innerHTML = "";
    document.getElementById("chart-sale-price4").innerHTML = "";
    document.getElementById("chart-sale-price5").innerHTML = "";
    document.getElementById("chart-sale-price6").innerHTML = "";
    document.getElementById("chart-sale-price7").innerHTML = "";
    document.getElementById("chart-sale-price8").innerHTML = "";
    document.getElementById("chart-sale-price9").innerHTML = "";
    renderSalesPriceChart(data);
}

d3.csv("data/Car_sales_updated.csv").then(function (data) {
    // Render initial chart
    renderSalesChart(data);

    // Event listener for trait selector
    var tabElms = document.querySelectorAll('a[data-bs-toggle="list"]')
    tabElms.forEach(function (tabElm) {
        tabElm.addEventListener('shown.bs.tab', function (event) {
            switch (event.target.getAttribute("id")) {
                case 'sales':
                    writeSalesCharts(data);
                    break;
                case 're-sale':
                    writeReSalesCharts(data);
                    break;
                case 'sale-price':
                    writeSalesPriceCharts(data);
                    break;
                default:
                    break;
            }
        })
    });

})

function ChartHelper(data, id, x_domain, y_domain, label, x_label,y_label) {

    margin = { top: 10, right: 30, bottom: 30, left: 60 },
        width = 400 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;

    tooltip = d3.select(id)
        .append("div")
        .attr("class", "tooltip")
    tooltipmouseover = function (event, d) { tooltip.style("opacity", .65) }
    tooltipmousemove = function (event, d) {
        tooltip
            .html(d.Make)
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 50) + "px")
    }
    tooltipmouseleave = function (event, d) {
        tooltip
            .transition()
            .duration(500)
        tooltip.style("opacity", 0)
    };

    annotations = d3.annotation()
    .annotations([{
        note: {
            label: label,
        },
        x: 200,
        y: 150,
        dy: -70,
        dx: 50
    }])

    svg1 = d3.select(id)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);
    x1 = d3.scaleLinear()
        .domain(x_domain)
        .range([0, width]);
    svg1.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(x1))
    y1 = d3.scaleLinear()
        .domain(y_domain)
        .range([height, 0]);
    svg1.append("g")
        .call(d3.axisLeft(y1));
    svg1.append('g')
        .selectAll("dot")
        .data(data)
        .join("circle")
        .attr("cx", function (d) { return x1(d[x_label]); })
        .attr("cy", function (d) { return y1(d[y_label]); })
        .attr("r", 4)
        .style("fill", "#ffc107")
        .on("mouseover", tooltipmouseover)
        .on("mousemove", tooltipmousemove)
        .on("mouseleave", tooltipmouseleave)
    svg1.append("g").call(annotations)

}


function renderSalesChart(data) {

                                        

    ChartHelper(data, id="#chart-sales1",x_domain=[1, 10], y_domain=[0, 300],label="0.04", x_label="Engine_size", y_label="Sales_in_thousands")
    ChartHelper(data, id="#chart-sales2",x_domain=[0, 500], y_domain=[0, 300],label="-0.152538", x_label="Horsepower", y_label="Sales_in_thousands")
    ChartHelper(data, id="#chart-sales3",x_domain=[80, 150], y_domain=[0, 300],label="0.406839", x_label="Wheelbase", y_label="Sales_in_thousands")
    ChartHelper(data, id="#chart-sales4",x_domain=[60, 80], y_domain=[0, 300],label=" 0.177802", x_label="Width", y_label="Sales_in_thousands")
    ChartHelper(data, id="#chart-sales5",x_domain=[140, 240], y_domain=[0, 300],label=" 0.272336", x_label="Length", y_label="Sales_in_thousands")
    ChartHelper(data, id="#chart-sales6",x_domain=[1, 6], y_domain=[0, 300],label="0.067184", x_label="Curb_weight", y_label="Sales_in_thousands")
    ChartHelper(data, id="#chart-sales7",x_domain=[5, 40], y_domain=[0, 300],label="0.138045 ", x_label="Fuel_capacity", y_label="Sales_in_thousands")
    ChartHelper(data, id="#chart-sales8",x_domain=[0, 50], y_domain=[0, 300],label="-0.066927", x_label="Fuel_efficiency", y_label="Sales_in_thousands")
    ChartHelper(data, id="#chart-sales9",x_domain=[0, 200], y_domain=[0, 300],label="-0.175562", x_label="Power_perf_factor", y_label="Sales_in_thousands")
}



function renderReSalesChart(data) {

                                         
    ChartHelper(data, id="#chart-re-sales1",x_domain=[1, 10], y_domain=[0, 80],label="0.527187", x_label="Engine_size", y_label="__year_resale_value")
    ChartHelper(data, id="#chart-re-sales2",x_domain=[0, 500], y_domain=[0, 80],label="0.773110", x_label="Horsepower", y_label="__year_resale_value")
    ChartHelper(data, id="#chart-re-sales3",x_domain=[80, 150], y_domain=[0, 80],label="-0.053685 ", x_label="Wheelbase", y_label="__year_resale_value")
    ChartHelper(data, id="#chart-re-sales4",x_domain=[60, 80], y_domain=[0, 80],label="0.178128", x_label="Width", y_label="__year_resale_value")
    ChartHelper(data, id="#chart-re-sales5",x_domain=[140, 240], y_domain=[0, 80],label="0.025390", x_label="Length", y_label="__year_resale_value")
    ChartHelper(data, id="#chart-re-sales6",x_domain=[1, 6], y_domain=[0, 80],label="0.363274", x_label="Curb_weight", y_label="__year_resale_value")
    ChartHelper(data, id="#chart-re-sales7",x_domain=[5, 40], y_domain=[0, 80],label="0.324796", x_label="Fuel_capacity", y_label="__year_resale_value")
    ChartHelper(data, id="#chart-re-sales8",x_domain=[0, 50], y_domain=[0, 80],label="-0.398459 ", x_label="Fuel_efficiency", y_label="__year_resale_value")
    ChartHelper(data, id="#chart-re-sales9",x_domain=[0, 200], y_domain=[0, 80],label="0.829511", x_label="Power_perf_factor", y_label="__year_resale_value")
}


function renderSalesPriceChart(data) {

    ChartHelper(data, id="#chart-sale-price1",x_domain=[1, 10], y_domain=[0, 100],label="0.649170", x_label="Engine_size", y_label="Price_in_thousands")
    ChartHelper(data, id="#chart-sale-price2",x_domain=[0, 500], y_domain=[0, 100],label="0.853455", x_label="Horsepower", y_label="Price_in_thousands")
    ChartHelper(data, id="#chart-sale-price3",x_domain=[80, 150], y_domain=[0, 100],label="0.067042", x_label="Wheelbase", y_label="Price_in_thousands")
    ChartHelper(data, id="#chart-sale-price4",x_domain=[60, 80], y_domain=[0, 100],label="0.301292", x_label="Width", y_label="Price_in_thousands")
    ChartHelper(data, id="#chart-sale-price5",x_domain=[140, 240], y_domain=[0, 100],label="0.182592", x_label="Length", y_label="Price_in_thousands")
    ChartHelper(data, id="#chart-sale-price6",x_domain=[1, 6], y_domain=[0, 100],label="0.511400", x_label="Curb_weight", y_label="Price_in_thousands")
    ChartHelper(data, id="#chart-sale-price7",x_domain=[5, 40], y_domain=[0, 100],label="0.406496", x_label="Fuel_capacity", y_label="Price_in_thousands")
    ChartHelper(data, id="#chart-sale-price8",x_domain=[0, 50], y_domain=[0, 100],label="-0.479539", x_label="Fuel_efficiency", y_label="Price_in_thousands")
    ChartHelper(data, id="#chart-sale-price9",x_domain=[0, 200], y_domain=[0, 100],label="0.905002", x_label="Power_perf_factor", y_label="Price_in_thousands")
}
