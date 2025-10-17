(function ($) {
  $(document).ready(function () {
    let hasReturnGo = document.querySelector("#ReturngoAccountEmbedding");
    let scCounter = 0;
    if (hasReturnGo) {
      let checkStoreCredits = setInterval(checkSC, 200);
      function checkSC() {
        scCounter = scCounter + 1;
        if (scCounter > 100) {
          clearInterval(checkStoreCredits);
          //$(".store-credits").removeClass("loading-info");
        }

        const srM = document.querySelector("#ReturngoPortalShadowDOM");
        if (!srM) {
          return;
        }

        const sr = srM.shadowRoot;
        const srInner = sr.querySelector(
          ".ReturnGO_AccountWidget-module_lineItem"
        );

        if (srInner) {
          clearInterval(checkStoreCredits);
          //$(".store-credits").removeClass("loading-info");

          let srText = srInner.innerText || srInner.textContent;
          srText = srText.replace("You have SGD ", "$");
          srText = srText.replace("You have ", "");
          if (srText.length > 0) {
            $(".store-credits-value").html(srText);

            let customerID = $(".storecredits-history").attr("data-customer");
            if (customerID) {
              let scLink =
                "/a/service/transactions?shop=the-tinsel-rack.myshopify.com&customerId=" +
                customerID +
                "&locale=en&currency_code=SGD";
              $(".storecredits-history").html(
                "View store credits history <a href='" +
                scLink +
                "' target='_blank'>here</a>"
              );
            }
          }
        }
      }
    }

    let hasJoyInfo = document.querySelector("#joy-account-dashboard");
    if (hasJoyInfo) {
      let checkTierMsg = setInterval(checkTM, 200);
      function checkTM() {
        const srM = document.querySelector(
          ".Account__TierCard--Progress__Label"
        );
        if (!srM) {
          return;
        }

        if (srM) {
          clearInterval(checkTierMsg);
          if ($(srM).html() != "Completed") {
            $(".tier-msg").html($(srM).html());
          }
        }
      }
    }

    let checkWishlist = setInterval(checkWL, 200);
    function checkWL() {
      let wishlistItem = document.querySelector(".swym-wishlist-grid");
      if (wishlistItem) {
        clearInterval(checkWishlist);

        let allWishList = document.querySelectorAll(".swym-wishlist-item");

        for (var i = 0; i < allWishList.length; i++) {
          let item = allWishList[i];
          item
            .querySelector(".swym-add-to-cart-btn")
            .addEventListener("click", function (event) {
              event.preventDefault();
              setTimeout(updateCartCount, 500);
            });
        }
      }
    }

    let hasCustomMetaForm = document.querySelector("#custom-metaform");
    if (hasCustomMetaForm) {
      let checkMetaForm = setInterval(checkMF, 200);
      function checkMF() {
        let customMF = hasCustomMetaForm.querySelector("#app-embed");
        if (customMF) {
          clearInterval(checkMetaForm);
          /* var formContainer = customMF.shadowRoot.querySelector("._inline_stahb_47");
          var emailInputDiv = customMF.shadowRoot.querySelector("._formFieldContainer_1ydxd_5");
          var formFieldsArr = customMF.shadowRoot.querySelectorAll("._formInputField_237zm_7"); */
          var formContainer = customMF.shadowRoot.querySelector(
            "#form-container-ref > section"
          );
          var emailInputDiv = customMF.shadowRoot.querySelector(
            "#form-container-ref > section > section > div > form > div"
          );
          var formFieldsArr = customMF.shadowRoot.querySelectorAll(
            "#form-container-ref > section > section > div > form > div > input"
          );

          var emailInput = formFieldsArr[0];
          var giftOneInput = formFieldsArr[1];
          //var giftTwoInput = formFieldsArr[2];

          /* var formFieldsObj = formContainer.querySelector("._formFieldset_8skcf_76");
          var formFieldsButton = formFieldsObj.querySelector("._formSubmitButton_8skcf_90");
          var formHeader = formContainer.querySelector("._formHeader_8skcf_24"); */

          var formFieldsObj = formContainer.querySelector("form");
          var formFieldsButton = formFieldsObj.querySelector("button");
          var formHeader = formContainer.querySelector(
            "section > div:nth-child(2) > section"
          );

          var formHeaderObj = formHeader.querySelector("h2");

          if (emailInput) {
            //setTimeout(function () {
            emailInput.value = customAcct.email;
            emailInput.dispatchEvent(new Event("input", { bubbles: true }));

            if (giftOneInput && customAcct.giftCardOne != "") {
              giftOneInput.value = customAcct.giftCardOne;
              giftOneInput.dispatchEvent(new Event("input", { bubbles: true }));
            }
            /* if (giftTwoInput && customAcct.giftCardTwo != "") {
              giftTwoInput.value = customAcct.giftCardTwo;
              giftTwoInput.dispatchEvent(new Event("input", { bubbles: true }));
            } */

            emailInputDiv.style.display = "none";
            formContainer.style.marginTop = "10px";
            formContainer.style.justifyItems = "left";
            formHeader.style.margin = "5px auto";
            formHeaderObj.style.textAlign = "left";
            formHeaderObj.style.fontSize = "14px";
            formFieldsObj.style.width = "300px";

            formFieldsButton.style.width = "255px";
            formFieldsButton.style.borderRadius = "10px";
            formFieldsButton.style.padding = "12px 20px";
            formFieldsButton.style.fontSize = "11px";
            formFieldsButton.style.textTransform = "uppercase";
            formFieldsButton.style.cursor = "pointer";

            $(".ttr-giftcard-button").addClass("active");
            //}, 500);
          }
        }
      }

      let checkFormSubmit = setInterval(checkMFSubmit, 200);
      function checkMFSubmit() {
        let customMF = hasCustomMetaForm.querySelector("#app-embed");
        if (customMF) {
          //var rootAppEmbed = customMF.shadowRoot.querySelector("._appEmbedRoot_1d2l7_9");
          var rootAppEmbed = customMF.shadowRoot.querySelector("#app-embed");
          if (rootAppEmbed) {
            let dataFormInfo = rootAppEmbed.getAttribute("data-current-step");
            if (dataFormInfo && dataFormInfo == "success") {
              clearInterval(checkFormSubmit);
              //var textAppEmbed = customMF.shadowRoot.querySelector("._textBody_2aowh_10");
              var textAppEmbed = rootAppEmbed.querySelector(
                "div > section > section > div > section[data-testid='banner-success'] > div"
              );
              textAppEmbed.innerHTML =
                "<p>Your gift card(s) is successfully updated!</p><p>Page will automatically refresh in <span>5s</span> to update latest changes.</p>";

              let timeLeft = 5;
              var rootAppEmbedSpan = textAppEmbed.querySelector("span");
              rootAppEmbedSpan.textContent = timeLeft + "s";

              const timer = setInterval(() => {
                timeLeft--;
                rootAppEmbedSpan.textContent = timeLeft + "s";
                if (timeLeft <= 0) {
                  clearInterval(timer);
                  window.location.reload(true);
                }
              }, 1000);
            }
          }
        }
      }
    }
    $(".ttr-giftcard-button").on("click", function (e) {
      e.preventDefault();
      $("#custom-metaform").toggleClass("active");
      return false;
    });

    function updateCartCount() {
      fetch("/cart.js")
        .then((response) => response.json())
        .then((cart) => {
          const cartCountBubble = document.querySelector(".cart-count-bubble");
          if (cartCountBubble) {
            cartCountBubble.textContent = cart.item_count;
          }
        });
    }

    setTimeout(function () {
      var moveWidth = 0;
      if ($(".tier-wrapper").hasClass("ttr-curator")) {
        moveWidth = "115px";
        $(".progress-container li.ttr-basic").addClass("hide-smiley");
        $(".progress-container li.ttr-curator").addClass("active");
      } else if ($(".tier-wrapper").hasClass("ttr-insider")) {
        moveWidth = "230px";
        $(".progress-container li.ttr-basic").addClass("hide-smiley");
        $(".progress-container li.ttr-curator").addClass("hide-smiley");
        $(".progress-container li.ttr-insider").addClass("active");
      } else if ($(".tier-wrapper").hasClass("ttr-ambassador")) {
        moveWidth = "345px";
        $(".progress-container li.ttr-basic").addClass("hide-smiley");
        $(".progress-container li.ttr-curator").addClass("hide-smiley");
        $(".progress-container li.ttr-insider").addClass("hide-smiley");
        $(".progress-container li.ttr-ambassador").addClass("active");
      }
      $(".progress-bar").animate({
        width: moveWidth,
      });
    }, 1000);

    $(".view-all-orders-wrapper").on("click", function () {
      $(".order-detail-wrapper").removeClass("hide");
      $(".pagination").removeClass("hide");
      $(this).addClass("hide");
    });

    $(".membership-card").on("click", function () {
      if ($(this).hasClass("flip-over")) {
        $(this).addClass("flip-back").removeClass("flip-over");
      } else {
        $(this).addClass("flip-over").removeClass("flip-back");
      }
    });

    //alert($(".Account__TierCard--Progress__Label").innerHTML + "...");
    if ($(".Account__TierCard--Progress__Label").length > 0) {
      alert($(".Account__TierCard--Progress__Label").innerHTML);
    }
  });

  /*
  $(document).on("pagecreate", function () {
    $(".membership-card").on("swipeleft", function (event) {
      $(this).addClass("flip-over").removeClass("flip-back");
      return false;
    });

    $(".membership-card").on("swiperight", function (event) {
      $(this).addClass("flip-back").removeClass("flip-over");
      return false;
    });
  }); */

  $(".ttr-points-button").on("click", function (e) {
    e.preventDefault();
    $(".AvadaJoy-Launcher__Button").trigger("click");
    return false;
  });

  $(".copy-button").on("click", function (e) {
    e.preventDefault();
    var copyText = $(this).attr("data-info");
    copyToClipboard(copyText);
    $(this).addClass("active");

    setTimeout(function () {
      $(".copy-button").removeClass("active");
    }, 1500);

    return false;
  });
})(jQuery);
