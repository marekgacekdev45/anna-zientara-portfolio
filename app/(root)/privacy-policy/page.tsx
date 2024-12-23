import Hero from '@/components/hero'
import type { Metadata } from 'next'

import HeroImage from '@/public/hero.webp'



export default function PrivacyPolicy() {
	return (
		<>
			<Hero image={HeroImage} title='Proces projektowy' />

			<main className='py-12 sm:py-24 '>
				<div className='wrapper prose prose-headings:text-gray-900 prose-headings:dark:text-gray-300 text-gray-900 dark:text-gray-300 mx-auto'>
					<h2>1. Informacje ogólne</h2>
					<p>
						Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem url:{' '}
						<a href='https://annazientara.pl'>annazientara.pl</a>
					</p>
					<p>Operatorem serwisu oraz Administratorem danych osobowych jest: Anna Zientara Testowa 123</p>
					<p>
						Adres kontaktowy poczty elektronicznej operatora: <a href='mailto:test@gmail.com'>test@gmail.com</a>
					</p>
					<p>
						Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych dobrowolnie w
						Serwisie.
					</p>
					<p>Serwis wykorzystuje dane osobowe w następujących celach:</p>
					<ul>
						<li>Prowadzenie newslettera</li>
						<li>Obsługa zapytań przez formularz</li>
						<li>Obsługa zamówień towarów - przygotowanie, pakowanie, wysyłka</li>
						<li>Realizacja zamówionych usług</li>
						<li>Obsługa odpowiednich dokumentów księgowych</li>
						<li>Windykacja należności</li>
						<li>Prezentacja oferty lub informacji</li>
						<li>
							Wykonanie przez Administratora danych osobowych prawnie ciążących na nim obowiązków zgodnie z art. 6 ust.
							1 lit. c) RODO w zakresie w jakim przewidują to przepisy szczególne (np. prowadzenie księgowości).
						</li>
					</ul>
					<p>Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w następujący sposób:</p>
					<ul>
						<li>
							Poprzez dobrowolnie wprowadzone w formularzach dane, które zostają wprowadzone do systemów Operatora.
						</li>
						<li>Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw. &bdquo;ciasteczka&rdquo;).</li>
					</ul>

					<h2>2. Wybrane metody ochrony danych stosowane przez Operatora</h2>
					<p>
						Miejsca logowania i wprowadzania danych osobowych są chronione w warstwie transmisji (certyfikat SSL).
						Dzięki temu dane osobowe i dane logowania, wprowadzone na stronie, zostają zaszyfrowane w komputerze
						użytkownika i mogą być odczytane jedynie na docelowym serwerze.
					</p>
					<p>
						Dane osobowe przechowywane w bazie danych są zaszyfrowane w taki sposób, że jedynie posiadający Operator
						klucz może je odczytać. Dzięki temu dane są chronione na wypadek wykradzenia bazy danych z serwera.
					</p>
					<p>
						Hasła użytkowników są przechowywane w postaci hashowanej. Funkcja hashująca działa jednokierunkowo - nie
						jest możliwe odwrócenie jej działania, co stanowi obecnie współczesny standard w zakresie przechowywania
						haseł użytkowników.
					</p>
					<p>Operator okresowo zmienia swoje hasła administracyjne.</p>
					<p>W celu ochrony danych Operator regularnie wykonuje kopie bezpieczeństwa.</p>
					<p>
						Istotnym elementem ochrony danych jest regularna aktualizacja wszelkiego oprogramowania, wykorzystywanego
						przez Operatora do przetwarzania danych osobowych, co w szczególności oznacza regularne aktualizacje
						komponentów programistycznych.
					</p>

					<h2>3. Hosting</h2>
					<p>Serwis jest hostowany (technicznie utrzymywany) na serwerach operatora: inna firma</p>
					<p>
						Firma hostingowa w celu zapewnienia niezawodności technicznej prowadzi logi na poziomie serwera. Zapisowi
						mogą podlegać:
					</p>
					<ul>
						<li>zasoby określone identyfikatorem URL (adresy żądanych zasobów &ndash; stron, plików),</li>
						<li>czas nadejścia zapytania,</li>
						<li>czas wysłania odpowiedzi,</li>
						<li>nazwę stacji klienta &ndash; identyfikacja realizowana przez protokół HTTP,</li>
						<li>informacje o błędach jakie nastąpiły przy realizacji transakcji HTTP,</li>
						<li>
							adres URL strony poprzednio odwiedzanej przez użytkownika (referer link) &ndash; w przypadku gdy przejście
							do Serwisu nastąpiło przez odnośnik,
						</li>
						<li>informacje o przeglądarce użytkownika,</li>
						<li>informacje o adresie IP,</li>
						<li>
							informacje diagnostyczne związane z procesem samodzielnego zamawiania usług poprzez rejestratory na
							stronie,
						</li>
						<li>
							informacje związane z obsługą poczty elektronicznej kierowanej do Operatora oraz wysyłanej przez
							Operatora.
						</li>
					</ul>

					<h2>4. Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych</h2>
					<p>
						W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane osobowe innym odbiorcom, jeśli będzie
						to niezbędne do wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków ciążących na
						Administratorze. Dotyczy to takich grup odbiorców:
					</p>
					<ul>
						<li>firma hostingowa na zasadzie powierzenia</li>
						<li>
							upoważnieni pracownicy i współpracownicy, którzy korzystają z danych w celu realizacji celu działania
							strony
						</li>
						<li>firmy, świadczące usługi marketingu na rzecz Administratora</li>
					</ul>
					<p>
						Twoje dane osobowe przetwarzane przez Administratora nie dłużej, niż jest to konieczne do wykonania
						związanych z nimi czynności określonych osobnymi przepisami (np. o prowadzeniu rachunkowości). W odniesieniu
						do danych marketingowych dane nie będą przetwarzane dłużej niż przez 3 lata.
					</p>
					<p>Przysługuje Ci prawo żądania od Administratora:</p>
					<ul>
						<li>dostępu do danych osobowych Ciebie dotyczących,</li>
						<li>ich sprostowania,</li>
						<li>usunięcia,</li>
						<li>ograniczenia przetwarzania,</li>
						<li>oraz przenoszenia danych.</li>
					</ul>
					<p>
						Przysługuje Ci prawo do złożenia sprzeciwu w zakresie przetwarzania wskazanego w pkt 3.2 wobec przetwarzania
						danych osobowych w celu wykonania prawnie uzasadnionych interesów realizowanych przez Administratora, w tym
						profilowania, przy czym prawo sprzeciwu nie będzie mogło być wykonane w przypadku istnienia ważnych prawnie
						uzasadnionych podstaw do przetwarzania, nadrzędnych wobec Ciebie interesów, praw i wolności, w szczególności
						ustalenia, dochodzenia lub obrony roszczeń.
					</p>
					<p>
						Na działania Administratora przysługuje skarga do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2,
						00-193 Warszawa.
					</p>
					<p>Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi Serwisu.</p>
					<p>
						W stosunku do Ciebie mogą być podejmowane czynności polegające na zautomatyzowanym podejmowaniu decyzji, w
						tym profilowaniu w celu świadczenia usług w ramach zawartej umowy oraz w celu prowadzenia przez
						Administratora marketingu bezpośredniego.
					</p>
					<p>
						Dane osobowe nie są przekazywane do krajów trzecich w rozumieniu przepisów o ochronie danych osobowych.
						Oznacza to, że nie przesyłamy ich poza teren Unii Europejskiej.
					</p>

					<h2>5. Informacje w formularzach</h2>
					<p>
						Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe, o ile zostaną one podane.
					</p>
					<p>Serwis może zapisać informacje o parametrach połączenia (oznaczenie czasu, adres IP).</p>
					<p>
						Serwis, w niektórych wypadkach, może zapisać informację ułatwiającą powiązanie danych w formularzu z adresem
						e-mail użytkownika wypełniającego formularz. W takim wypadku adres e-mail użytkownika pojawia się wewnątrz
						adresu URL strony zawierającej formularz.
					</p>
					<p>
						Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego formularza, np. w celu
						dokonania procesu obsługi zgłoszenia serwisowego lub kontaktu handlowego, rejestracji usług itp. Każdorazowo
						kontekst i opis formularza w czytelny sposób informuje, do czego on służy.
					</p>

					<h2>6. Logi Administratora</h2>
					<p>
						Informacje zachowaniu użytkowników w serwisie mogą podlegać logowaniu. Dane te są wykorzystywane w celu
						administrowania serwisem.
					</p>

					<h2>7. Istotne techniki marketingowe</h2>
					<p>
						Operator stosuje analizę statystyczną ruchu na stronie, poprzez Google Analytics (Google Inc. z siedzibą w
						USA). Operator nie przekazuje do operatora tej usługi danych osobowych, a jedynie zanonimizowane informacje.
						Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika. W zakresie informacji o
						preferencjach użytkownika gromadzonych przez sieć reklamową Google użytkownik może przeglądać i edytować
						informacje wynikające z plików cookies przy pomocy narzędzia:{' '}
						<a href='https://www.google.com/ads/preferences/'>https://www.google.com/ads/preferences/</a>
					</p>
					<p>
						Operator korzysta z piksela Facebooka. Ta technologia powoduje, że serwis Facebook (Facebook Inc. z siedzibą
						w USA) wie, że dana osoba w nim zarejestrowana korzysta z Serwisu. Bazuje w tym wypadku na danych, wobec
						których sam jest administratorem, Operator nie przekazuje od siebie żadnych dodatkowych danych osobowych
						serwisowi Facebook. Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika.
					</p>

					<h2>8. Informacja o plikach cookies</h2>
					<p>Serwis korzysta z plików cookies.</p>
					<p>
						Pliki cookies (tzw. &bdquo;ciasteczka&rdquo;) stanowią dane informatyczne, w szczególności pliki tekstowe,
						które przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron
						internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas
						przechowywania ich na urządzeniu końcowym oraz unikalny numer.
					</p>
					<p>
						Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu pliki cookies oraz uzyskującym do nich
						dostęp jest operator Serwisu.
					</p>
					<p>Pliki cookies wykorzystywane są w następujących celach:</p>
					<ul>
						<li>
							utrzymanie sesji użytkownika Serwisu (po zalogowaniu), dzięki której użytkownik nie musi na każdej
							podstronie Serwisu ponownie wpisywać loginu i hasła;
						</li>
						<li>realizacji celów określonych powyżej w części &quot;Istotne techniki marketingowe&ldquo;;</li>
					</ul>
					<p>
						W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: &bdquo;sesyjne&rdquo; (session cookies)
						oraz &bdquo;stałe&rdquo; (persistent cookies). Cookies &bdquo;sesyjne&rdquo; są plikami tymczasowymi, które
						przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub
						wyłączenia oprogramowania (przeglądarki internetowej). &bdquo;Stałe&rdquo; pliki cookies przechowywane są w
						urządzeniu końcowym Użytkownika przez czas określony w parametrach plików cookies lub do czasu ich usunięcia
						przez Użytkownika.
					</p>
					<p>
						Oprogramowanie do przeglądania stron internetowych (przeglądarka internetowa) zazwyczaj domyślnie dopuszcza
						przechowywanie plików cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą dokonać zmiany
						ustawień w tym zakresie. Przeglądarka internetowa umożliwia usunięcie plików cookies. Możliwe jest także
						automatyczne blokowanie plików cookies. Szczegółowe informacje na ten temat zawiera pomoc lub dokumentacja
						przeglądarki internetowej.
					</p>
					<p>
						Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach
						internetowych Serwisu.
					</p>
					<p>
						Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu wykorzystywane mogą być również przez
						współpracujące z operatorem Serwisu podmioty, w szczególności dotyczy to firm: Google (Google Inc. z
						siedzibą w USA), Facebook (Facebook Inc. z siedzibą w USA), Twitter (Twitter Inc. z siedzibą w USA).
					</p>

					<h2>9. Zarządzanie plikami cookies &ndash; jak w praktyce wyrażać i cofać zgodę?</h2>
					<p>
						Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić ustawienia przeglądarki. Zastrzegamy, że
						wyłączenie obsługi plików cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa, utrzymania
						preferencji użytkownika może utrudnić, a w skrajnych przypadkach może uniemożliwić korzystanie ze stron www.
					</p>
					<p>
						W celu zarządzania ustawieniami cookies wybierz z listy poniżej przeglądarkę internetową, której używasz i
						postępuj zgodnie z instrukcjami:
					</p>
					<ul>
						<li>Edge</li>
						<li>Internet Explorer</li>
						<li>Chrome</li>
						<li>Safari</li>
						<li>Firefox</li>
						<li>Opera</li>
					</ul>
					<p>Urządzenia mobilne:</p>
					<ul>
						<li>Android</li>
						<li>Safari (iOS)</li>
						<li>Windows Phone</li>
					</ul>
				</div>
			</main>
		</>
	)
}
