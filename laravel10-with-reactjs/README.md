# Laravel10 With ReactJs([Document](https://laravel.com/docs/10.x/vite#installing-vite-and-laravel-plugin)) 

  amra backend aa Laravel10 use korbo and frontend aaa ReactJs use korbo...ReactJs hocche amader javascript ar akta frontend FreamWork..ReactJs chara ooo javascript ar r oo kichu frontend FreamWork ache jemon **AngularJS**, **VueJs**..

  ta chara javascript ar backend FreamWork oooo ache jemon **NodeJS**,**ExpressJS**

  mot kotha javascript ar Frontend and Backend ai 2 tar jonnoi FreamWork ache...

## The below process is for connect ReactJs by vite with Laravel 10 ([Tutorial](https://www.youtube.com/watch?v=JN26lO6d7cE)) 

  1. prothom a amader laravel10 application ta ```composer create-project laravel/laravel project_ar_nam``` ai command ar maddhome create korte hobe

  2. amader pc te node version koto install kora ache oi ta check korte hobe  ```node -v``` ba ```node --version``` ai command ar maddhome... jodi amader node version 16 ba 16 ar niche thake tahole amader laravel application ar moddhe amader ReactJs ar plugin ta install hobe na amader laravel ar official documentation ar moddhe bola ache amader node version 16 ba 16 niche thakle hobe na tai amader node version 16 ba 16 ar oporer version ta download korte hobe

  3. amader pc te npm version koto install kora ache oi ta check korte hobe ```npm -v``` ba ```npm --version``` ai command ar maddhome..npm mane hocche node package manager..install kora na thakle install kore nite hobe..

  4. tar pore amader laravel application ar moddhe ai command ta chalate hobe ```npm install```  ai command ta chalanor  pore amra dekhte pabo amader laravel application ar moddhe node_modules name akta directory create hoye geche and oi directory ar moddhe amder vite soho oonek directory ache..

  5. tar pore amader Reactjs install korar jonno ai command ta chalate hobe ```npm install --save-dev @vitejs/plugin-react```([Document](https://laravel.com/docs/10.x/vite#react))  amader ReactJs ta install hoye jawar pore amader laravel application ar moddhe jai vite.config.js nam aa file ta ache oi file ar moddhe giye amader configure kore dite hobe oi file ar opore aita ```import react from '@vitejs/plugin-react';``` import kore dite dite hobe and plugins:[
    ar moddhe amader react(), aita likhe dite hobe
  ]

  6. tar pore amader laravel application ar moddhe resources/views/ar moddhe jei view file take ami react ar maddhome view korate  chacci oi view file ar moddhe giye amader

        @viteReactRefresh
        @vite('resources/js/app.js')

        aita likhe dite hobe mane ai blade directive 2ta amader view file ar moddhe likhe dite hobe jei view file take ami react ar maddhome view korate chacci oi view file ar moddhe...

        akhane akta bishoy sobsomoy mone rakhte hobe ja amader @viteReactRefresh ai blade directive ta sobsomoy @vite blade directive ar oopre ba aage thakbe...

   7. tar pore amader ai command ta chalate hobe ```npm run dev``` and ai command ta chalanor pore amder vs code ar tarminal aa dekhte pabo amader VITE ta kon port ba url a cholche and amader Laravel ta kon port aa ba url aa cholche ta dekhte pabo and tar pore amader ```php artisan serve``` command ta chalate hobe and ai command ta chalanor pore amder vs code ar tarminal aa dekhte pabo je amader ai laravel application ta kon port aa ba kon url a cholche oi url ta ke copy kore niye amader laravel application ar .env file ar moddhe giye APP_URL= ar ai khane past kore dite hobe and .env file ta save kore dite hobe.

   8. jodi amra ai ```npm run dev``` ai command ta ke na calilye ba ai command take ctrl+c diye off kore ```php artisan serve``` ai command ta chalai and ai command ta chalaron por jei url ta pabo oi url diye browser a browse kori tahole amra ai error ta pabo  

        Illuminate\Foundation\ViteManifestNotFoundException
        PHP 8.1.2-1ubuntu2.14
        10.34.2
        Vite manifest not found at: /home/dip-ghosh/Documents/Laravel10-With-ReactJs/laravel10-with-reactjs/public/build/manifest.json

        ai error ar mane hocche amader laravel application ar moddhe jei public directory ta ache and oi directory ar moddhe jei build nam aa directory ta ache oi directory ar moddhe amader manifest.jeson file take pai ni....To solve this error we have to run this command ```npm run build``` ai command ta chalanor sathe sathe amader laravel application ar moddhe public directoy ar moddhe build nam aa akta directory create hoye jabe and oi build directory ar moddhe amader manifest.json file ta create hoye jabe...and amader shudhu ```php artisan serve``` command ta chalalei hobe and oi url ar diye browser ar moddhe browse korlei amra amader page dekhte pabo jar fole amader ```npm run dev``` ai command ta sobsomoy chaliye rakhte hobe na.....

        and amra jodi dekhte chai je amader VITE server ar sathe amader application ta connected hoyeche kina tahole amra aabar ```npm run dev``` ai command ta chalabo and ai command ta chalanor pore amader tarminal ar  moddhe VITE ar jei Url ta ashbe oi url diye browse korle amara vite ar akta default page dekhte pabo jar mane hocche amader application ta VITE server ar sathe connected hoye geche ta chara ooo amara amader  browser ar moddhe giye inspect kore console ar moddhe giye Default levels ta ke change kore jodi verbose take select kore amader browser take aabar reload dei tahole amara dekhte pabo amader console ar moddhe oo dekhacche je amader vite connected hoye geche...

   9. amader ReactJs ar file gulo amra laravel application ar resources/js/ ar moddhe akta directory create kore oi directory ar moddhe amra amader ReactJs ar file gulo likhbo amra jani ReactJs ar code lekha hoy jsx(java script xamal) sintax aaa tai amader ReactJs ar  file gulor shesh aa .jsx extension likhte hoy.. jsx sintax ta dekhte HTML ar moto kintu jsx HTML na...

   10. amra  resources/js/ ar moddhe akta directory create kore oi directory ar moddhe jei .jsx file gulo rakhbo oi file guloke amader  resources/js ar moddhe jei app.js ache oi file ar moddhe giye import kore dite hobe....

   11. jodi amader ReactJs file run korar somoy ai error ta ashe aita hocche akta runtime error

       ```[vite] Internal server error: Failed to resolve import "react/jsx-dev-runtime" from "resources/js/components/index.jsx". Does the file exist?```

       tahole amader ai command ta chalate hobe ```npm install react@latest react-dom@latest```

   12. jokhon amra amader project take live server aaa deploy korbo tar aage amra  ```npm run  build``` commmand ta chalabo ai command ta chalanor pore amader sob build hoye jabe tokhon jodi amara ```npm run dev``` command ta na ooo chaliye rakhi ta ooo amader code ta browser aa kaj korbe ai ```npm run build``` command ta amader sob build kore dei tai joi amra ```npm run dev``` ta na oo chailye rakhi amader code ta browse aaa kaj korbe...

       Note: amra react ar joto tuku kaj kore ba kaj korar pore ```npm run build``` command ta chalabo amader toto tuku kaj eee build korbe and build command ta chalanor pore ami jodi amar .jsx file a kono changes kori tahole dekha jabe amader oi .jsx file a oi changes ta amra amader browser ar moddhe dekhte parchi na karon amader oi change take amara akhon build command ar maddhome build kori nai tai...


