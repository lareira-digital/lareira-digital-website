FROM python:3.11-alpine3.17
EXPOSE 8020

ENV USER=appuser \
    GROUP=appgroup \
    UID=1010 \
    GID=1010

RUN addgroup -S $GROUP && \
    adduser \
    --disabled-password \
    --gecos "" \
    --home "/srv" \
    --ingroup "$GROUP" \
    --no-create-home \
    --uid "$UID" \
    "$USER"

RUN chown 1010:1010 /srv

# Install poetry
RUN curl -sSL https://install.python-poetry.org | python3 -

USER $USER
# Copy source code
COPY --chown $UID:$GID ../src /srv

CMD ["whatever"]