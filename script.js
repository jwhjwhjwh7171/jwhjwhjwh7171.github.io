function selectItem(item, image) {
    document.getElementById('display').innerText = item + '가(이) 나왔습니다!';
    var itemImage = document.getElementById('itemImage');
    itemImage.src = image;
    itemImage.style.display = 'block';
}
