// tab
const isTabActive = (v) => {
  console.log(v, v.value);
  const btn = document.querySelectorAll(".tabBtn > span");

  const area = document.querySelectorAll(".tabArea");
  btn.forEach((el) => {
    el.classList.remove("isActive");
  });
  area.forEach((el) => {
    el.classList.remove("isActive");
  });
  btn[Number(v.value) - 1].classList.add("isActive");
  area[Number(v.value) - 1].classList.add("isActive");
};

// 개인정보동의 toggle
const isToggle = (v) => {
  document.querySelector(".isToggle").classList.toggle("isActive");
};

// required chk
// required onkeypress="isRequired(this)"
const isRequired = (v) => {
  setTimeout(() => {
    const rq = document.querySelectorAll("input:required");
    let isSubmit = true;

    rq.forEach((element) => {
      console.log(element);
      if (element.type === "checkbox") {
        if (element.checked === false) {
          isSubmit = false;
        }
      } else {
        if (!element.value) {
          isSubmit = false;
        }
      }
    });

    isSubmit
      ? (document.getElementById("isSubmit").disabled = false)
      : (document.getElementById("isSubmit").disabled = true);
  });
};

const copyCode = (v) => {
  const someData = v;

  let tempInput = document.createElement("input");
  tempInput.value = someData;

  // 굳이 body일 필요는 없습니다. 아무 엘리먼트나 지정해서 작성해도 무관합니다.
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert(`${v} 코드가 복사되었습니다.`);
};
