# Przewodnik Aktualizacji n8n

## 🔄 Jak zaktualizować projekt n8n

### 1. Aktualizacja zależności (Dependencies)

#### Sprawdź obecne wersje:
```bash
# Sprawdź outdated packages
pnpm outdated

# Sprawdź outdated packages rekursywnie w całym monorepo
pnpm --recursive outdated
```

#### Aktualizuj wszystkie zależności:
```bash
# Aktualizuj wszystkie pakiety do najnowszych wersji
pnpm update

# Aktualizuj rekursywnie w całym monorepo
pnpm --recursive update

# Aktualizuj do najnowszych wersji (ignorując semver)
pnpm --recursive update --latest
```

#### Aktualizuj konkretny pakiet:
```bash
# Aktualizuj konkretny pakiet
pnpm update package-name

# Aktualizuj do konkretnej wersji
pnpm add package-name@latest
```

### 2. Aktualizacja pnpm (Package Manager)

```bash
# Sprawdź obecną wersję pnpm
pnpm --version

# Aktualizuj pnpm globalnie
npm install -g pnpm@latest

# Lub używając corepack (zalecane)
corepack prepare pnpm@latest --activate
```

### 3. Aktualizacja Node.js

Projekt wymaga Node.js >= 22.16:
```bash
# Sprawdź obecną wersję Node.js
node --version

# Jeśli używasz nvm:
nvm install 22
nvm use 22

# Jeśli używasz fnm:
fnm install 22
fnm use 22
```

### 4. Kompletna procedura aktualizacji

#### Krok 1: Backup
```bash
# Utwórz backup
git add .
git commit -m "backup przed aktualizacją"
git branch backup-$(date +%Y%m%d)
```

#### Krok 2: Wyczyść cache i node_modules
```bash
# Użyj skryptu reset (czyści wszystko)
pnpm reset

# Lub ręcznie:
pnpm clean
rm -rf node_modules
rm -rf packages/*/node_modules
rm pnpm-lock.yaml
```

#### Krok 3: Zainstaluj świeże zależności
```bash
# Zainstaluj zależności
pnpm install

# Zbuduj projekt
pnpm build
```

#### Krok 4: Testuj
```bash
# Uruchom testy
pnpm test

# Sprawdź linting
pnpm lint

# Sprawdź typecheck
pnpm typecheck
```

### 5. Aktualizacja konkretnych narzędzi

#### TypeScript:
```bash
pnpm add -D typescript@latest
```

#### Turbo:
```bash
pnpm add -D turbo@latest
```

#### Biome (linter/formatter):
```bash
pnpm add -D @biomejs/biome@latest
```

#### Jest:
```bash
pnpm add -D jest@latest @types/jest@latest
```

### 6. Sprawdzenie bezpieczeństwa

```bash
# Sprawdź vulnerabilities
pnpm audit

# Automatycznie napraw problemy bezpieczeństwa
pnpm audit --fix
```

### 7. Dostępne skrypty projektu

Twój projekt ma następujące użyteczne skrypty:

```bash
# Rozwój
pnpm dev              # Uruchom wszystko w trybie dev
pnpm dev:be           # Tylko backend
pnpm dev:fe           # Tylko frontend

# Budowanie
pnpm build            # Zbuduj wszystko
pnpm build:backend    # Tylko backend
pnpm build:frontend   # Tylko frontend

# Testowanie
pnpm test             # Wszystkie testy
pnpm test:backend     # Testy backend
pnpm test:frontend    # Testy frontend

# Utrzymanie kodu
pnpm lint             # Sprawdź kod
pnpm lintfix          # Napraw problemy
pnpm format           # Formatuj kod
pnpm clean            # Wyczyść pliki build
pnpm reset            # Pełny reset projektu
```

### 8. Troubleshooting

#### Problem z node_modules:
```bash
pnpm reset  # Użyj tego zamiast rm -rf
```

#### Problem z build:
```bash
pnpm clean
pnpm build
```

#### Problem z TypeScript:
```bash
pnpm typecheck
```

#### Problem z lockfile:
```bash
rm pnpm-lock.yaml
pnpm install
```

### 9. Najlepsze praktyki

1. **Zawsze testuj po aktualizacji**: `pnpm test`
2. **Sprawdź compatibility**: Sprawdź CHANGELOG.md projektu
3. **Aktualizuj stopniowo**: Nie wszystko naraz, szczególnie major versions
4. **Backup**: Zawsze commituj zmiany przed większymi aktualizacjami
5. **CI/CD**: Uruchom pełne testy przed merge do main

### 10. Monitoring aktualizacji

Dodaj do swojego workflow:
```bash
# Sprawdzaj regularnie
pnpm outdated

# Używaj dependabot (GitHub) lub renovate dla automatycznych PR
```

---

**Obecna wersja projektu**: n8n v1.100.0  
**Package Manager**: pnpm@10.12.1  
**Node.js wymagane**: >=22.16  
**TypeScript**: Tak  
**Monorepo**: Tak (Turbo)