<?php

/* @var $url string */
use neo\iframeviewer\IframeWidget;
?>
<div class="preview_container">
    <div class="top_nav">
        <ul>
            <li class="desktop active"><span class="fa fa-desktop"></span></li>
            <li class="tablet_portrait"><span class="fa fa-tablet"></span></li>
            <li class="tablet_landscape"><span class="fa fa-tablet landscape"></span></li>
            <li class="mobile_portrait"><span class="fa fa-mobile"></span></li>
            <li class="mobile_landscape"><span class="fa fa-mobile landscape"></span></li>
        </ul>
    </div>
    <div class="preview_container">
        <div class="preview_content">
            <div class="boxes my-auto desktop">
                <?= IframeWidget::widget([
                    'options' => [
                        'src' => $url
                    ]
                ]) ?>
            </div>
        </div>
    </div>
</div>