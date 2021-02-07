<?php
namespace neo\websiteviewer;
//namespace app\extensions\yii2WebsiteViewer;
/**
 * This is just an example.
 */
class WebsiteViewer extends \yii\base\Widget
{
    public $url;

    public function init()
    {
        parent::init();
        if(empty($this->url)){
            throw new \InvalidArgumentException('Url is required');
        }
        $view = $this->getView();
        WebsiteViewerAsset::register($view);
    }

    public function run()
    {
       echo $this->render('index',[
           'url' => $this->url
       ]);
    }
}
