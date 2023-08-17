<?
// avoid global style change when there is more than 1 of same component in editor
$randomComponentId = random_int(1, 10000);
?>

<div class="page-404 <?= $attributes["variant"] ?> page-404-<?= $randomComponentId ?>">
  <style>
        .page-404-<?= $randomComponentId ?> {
            background-color: <?= $attributes["bgColor"] ?>;
            margin-bottom: <?= $attributes["marginM"] ?>px
        }

        @media (min-width: 768px) {
            .page-404-<?= $randomComponentId ?> {
                margin-bottom: <?= $attributes["marginD"] ?>px
            }
        }
    </style>

    <?= $content ?>
</div>