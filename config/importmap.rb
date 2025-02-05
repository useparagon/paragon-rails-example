# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "@useparagon/connect", to: "@useparagon--connect.js" # @1.0.28
pin "@useparagon/connect/ConnectSDK", to: "https://ga.jspm.io/npm:@useparagon/connect@1.0.28/dist/src/ConnectSDK.js" # @1.0.28
