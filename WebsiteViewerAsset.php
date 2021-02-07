<?php

namespace neo\websiteviewer;
//namespace app\extensions\yii2WebsiteViewer;

use yii\web\AssetBundle;

class WebsiteViewerAsset extends AssetBundle
{

    public $publishOptions = [
        'forceCopy' => YII_ENV === 'dev'
    ];

    /**
     *
     * @inheritdoc
     */
    public $sourcePath = __DIR__ . '/assets/src';

    /**
     *
     * @inheritdoc
     */
    public $css = [
        'css/website-preview-style.css'
    ];

    public $js = [
        'js/website-preview-function.js'
    ];
}
