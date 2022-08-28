function calculatePagination() {
    let pageItems = $(".paginate");
    const numItems = pageItems.length;
    const perPage = parseInt(document.getElementById("select1").value);
    pageItems.hide().slice(0, perPage).show();
    $("#navPag").pagination({
        items: numItems,
        itemsOnPage: perPage,
        displayedPages: 15,
        onPageClick: function(pageNum) {
            let start = perPage * (pageNum - 1);
            let end = start + perPage;
            pageItems.hide().slice(start, end).show();
        }
    });
};

$(document).ready(() => calculatePagination());
$('#select1').change(() => calculatePagination());