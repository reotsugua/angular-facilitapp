'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">facilit-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-3f19639d5a52ba0491e3376b3a1fabfc727014336a9e51b4a7f3ae5e086326911b825d96fa28baee81fcdf1020d399fec3ad5ebb95c888436909fcbdaca58546"' : 'data-bs-target="#xs-components-links-module-AppModule-3f19639d5a52ba0491e3376b3a1fabfc727014336a9e51b4a7f3ae5e086326911b825d96fa28baee81fcdf1020d399fec3ad5ebb95c888436909fcbdaca58546"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-3f19639d5a52ba0491e3376b3a1fabfc727014336a9e51b4a7f3ae5e086326911b825d96fa28baee81fcdf1020d399fec3ad5ebb95c888436909fcbdaca58546"' :
                                            'id="xs-components-links-module-AppModule-3f19639d5a52ba0491e3376b3a1fabfc727014336a9e51b4a7f3ae5e086326911b825d96fa28baee81fcdf1020d399fec3ad5ebb95c888436909fcbdaca58546"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CoreModule-514566cac2a4549a6b4e4f272eccd95b368f82ce9248763067989b00cc5ea5cf5efb9e577330fec76b8177732ef1f5c4ef63eab0a9d9baee7bdaad4fe5c37b69"' : 'data-bs-target="#xs-components-links-module-CoreModule-514566cac2a4549a6b4e4f272eccd95b368f82ce9248763067989b00cc5ea5cf5efb9e577330fec76b8177732ef1f5c4ef63eab0a9d9baee7bdaad4fe5c37b69"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-514566cac2a4549a6b4e4f272eccd95b368f82ce9248763067989b00cc5ea5cf5efb9e577330fec76b8177732ef1f5c4ef63eab0a9d9baee7bdaad4fe5c37b69"' :
                                            'id="xs-components-links-module-CoreModule-514566cac2a4549a6b4e4f272eccd95b368f82ce9248763067989b00cc5ea5cf5efb9e577330fec76b8177732ef1f5c4ef63eab0a9d9baee7bdaad4fe5c37b69"' }>
                                            <li class="link">
                                                <a href="components/SideNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SideNavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-01d3f912535394f1f1ae19516890c7cc8e60636fff5dd8e73c4de9f8539227763eb9715b85d5bc6532b1601e0a1d48f077639c47d688426582be26e0b25f5835"' : 'data-bs-target="#xs-components-links-module-SharedModule-01d3f912535394f1f1ae19516890c7cc8e60636fff5dd8e73c4de9f8539227763eb9715b85d5bc6532b1601e0a1d48f077639c47d688426582be26e0b25f5835"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-01d3f912535394f1f1ae19516890c7cc8e60636fff5dd8e73c4de9f8539227763eb9715b85d5bc6532b1601e0a1d48f077639c47d688426582be26e0b25f5835"' :
                                            'id="xs-components-links-module-SharedModule-01d3f912535394f1f1ae19516890c7cc8e60636fff5dd8e73c4de9f8539227763eb9715b85d5bc6532b1601e0a1d48f077639c47d688426582be26e0b25f5835"' }>
                                            <li class="link">
                                                <a href="components/ChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LineChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LineChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PieChartsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PieChartsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResumeTransComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResumeTransComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-SharedModule-01d3f912535394f1f1ae19516890c7cc8e60636fff5dd8e73c4de9f8539227763eb9715b85d5bc6532b1601e0a1d48f077639c47d688426582be26e0b25f5835"' : 'data-bs-target="#xs-pipes-links-module-SharedModule-01d3f912535394f1f1ae19516890c7cc8e60636fff5dd8e73c4de9f8539227763eb9715b85d5bc6532b1601e0a1d48f077639c47d688426582be26e0b25f5835"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-01d3f912535394f1f1ae19516890c7cc8e60636fff5dd8e73c4de9f8539227763eb9715b85d5bc6532b1601e0a1d48f077639c47d688426582be26e0b25f5835"' :
                                            'id="xs-pipes-links-module-SharedModule-01d3f912535394f1f1ae19516890c7cc8e60636fff5dd8e73c4de9f8539227763eb9715b85d5bc6532b1601e0a1d48f077639c47d688426582be26e0b25f5835"' }>
                                            <li class="link">
                                                <a href="pipes/CurrencyFormatPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CurrencyFormatPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/DateFormatPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DateFormatPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TransactionsModule.html" data-type="entity-link" >TransactionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-TransactionsModule-fa10662ab9e344d6199435644caf45191ab66d20dcd872a121655be6fb61acb30e57d84d0ec8986e2069752fbcaa35b74cf35375fc0e5ff380961157f68e4fa7"' : 'data-bs-target="#xs-components-links-module-TransactionsModule-fa10662ab9e344d6199435644caf45191ab66d20dcd872a121655be6fb61acb30e57d84d0ec8986e2069752fbcaa35b74cf35375fc0e5ff380961157f68e4fa7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TransactionsModule-fa10662ab9e344d6199435644caf45191ab66d20dcd872a121655be6fb61acb30e57d84d0ec8986e2069752fbcaa35b74cf35375fc0e5ff380961157f68e4fa7"' :
                                            'id="xs-components-links-module-TransactionsModule-fa10662ab9e344d6199435644caf45191ab66d20dcd872a121655be6fb61acb30e57d84d0ec8986e2069752fbcaa35b74cf35375fc0e5ff380961157f68e4fa7"' }>
                                            <li class="link">
                                                <a href="components/DownloadCsvButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DownloadCsvButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TransactionDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransactionDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TransactionListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransactionListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ChartService.html" data-type="entity-link" >ChartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SummaryService.html" data-type="entity-link" >SummaryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransactionService.html" data-type="entity-link" >TransactionService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CardData.html" data-type="entity-link" >CardData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DailySales.html" data-type="entity-link" >DailySales</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaymentTypeCounts.html" data-type="entity-link" >PaymentTypeCounts</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Summary.html" data-type="entity-link" >Summary</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Transaction.html" data-type="entity-link" >Transaction</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});