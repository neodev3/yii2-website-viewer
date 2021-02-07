Website viewer
==============
This will allow you to check your website in different views.

Installation
------------

The preferred way to install this extension is through [composer](http://getcomposer.org/download/).

Either run

```
php composer.phar require --prefer-dist neodev3/yii2-website-viewer "*"
```

or add

```
"neodev3/yii2-website-viewer": "*"
```

to the require section of your `composer.json` file.


Usage
-----

Once the extension is installed, simply use it in your code by  :

```php
<?= \neo\websiteviewer\WebsiteViewer::widget([
            'url' => 'https://yourWebsite.com'//Url::base(true)
]); ?>

```

![alt text](https://github.com/neodev3/yii2-website-viewer/blob/master/assets/example.gif?raw=true)

Supported Layouts :

1 desktop
2 tablet
3 tablet landscape
4 mobile
5 mobile landscape
