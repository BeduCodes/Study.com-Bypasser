
(function() {

	var loginBox = document.getElementsByClassName("article-cutoff-div")[0]
	loginBox.remove()

	var classFaded = document.getElementsByClassName('faded-content');
	var classFadedArray = Array.prototype.slice.call(classFaded);

	for (const item in classFadedArray){
		classFadedArray[item].classList.remove("faded-content");
	}

	var classHidden = document.getElementsByClassName('hidden');
	var classHiddenArray = Array.prototype.slice.call(classHidden);

	for (const item in classHiddenArray){
		classHiddenArray[item].classList.remove("hidden");
	}
})();
